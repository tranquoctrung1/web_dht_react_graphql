import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    ApolloLink,
    from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { CreateActivityLogDocument } from '../__generated__/graphql';

export const url = `http://14.161.22.76:6001`;
//export const url = `http://localhost:3001`;

const httpLink = new HttpLink({ uri: url });

// Attach the JWT to every request. The server reads `req.headers.token`
// (see server/index.js context) to identify the caller.
const authLink = setContext((_, { headers }) => {
    let token = '';
    try {
        token = localStorage.getItem('token') || '';
    } catch (e) {
        token = '';
    }
    return {
        headers: {
            ...headers,
            token: token,
        },
    };
});

// Remove obvious secret fields before persisting a mutation payload.
const scrubSecrets = (variables: any) => {
    try {
        const clone = JSON.parse(JSON.stringify(variables ?? {}));
        const walk = (obj: any) => {
            if (obj && typeof obj === 'object') {
                for (const key of Object.keys(obj)) {
                    if (/pwd|pass|salt|secret|token/i.test(key)) {
                        obj[key] = '***';
                    } else {
                        walk(obj[key]);
                    }
                }
            }
        };
        walk(clone);
        return clone;
    } catch (e) {
        return {};
    }
};

// Fire-and-forget audit logging: after any mutation (except the logger itself)
// completes, record a MUTATION activity row. This must NEVER break app flow.
const activityLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((result) => {
        try {
            const def: any = operation.query.definitions.find(
                (d: any) => d.kind === 'OperationDefinition',
            );
            const isMutation = def && def.operation === 'mutation';
            const opName = operation.operationName;

            let token = '';
            try {
                token = localStorage.getItem('token') || '';
            } catch (e) {
                token = '';
            }

            if (isMutation && opName !== 'CreateActivityLog' && token !== '') {
                let detail = '';
                try {
                    detail = JSON.stringify(scrubSecrets(operation.variables));
                } catch (e) {
                    detail = '';
                }
                if (detail.length > 1000) {
                    detail = detail.slice(0, 1000);
                }

                client
                    .mutate({
                        mutation: CreateActivityLogDocument,
                        variables: {
                            Action: 'MUTATION',
                            Target: opName,
                            Page: window.location.pathname,
                            Detail: detail,
                        },
                        fetchPolicy: 'no-cache',
                    })
                    .catch(() => {
                        // swallow — logging must never disrupt the app
                    });
            }
        } catch (e) {
            // swallow — logging must never disrupt the app
        }

        return result;
    });
});

const client = new ApolloClient({
    link: from([authLink, activityLink, httpLink]),
    cache: new InMemoryCache({
        addTypename: false,
    }),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'network-only',
            nextFetchPolicy: 'network-only',
        },
        query: {
            fetchPolicy: 'network-only',
        },
    },
});

export default client;
