import { ApolloClient, InMemoryCache } from '@apollo/client';

const url = `http://14.161.22.76:6001`;
// const url = `http://localhost:3001`;

const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache({
        addTypename: false,
    }),
});

export default client;
