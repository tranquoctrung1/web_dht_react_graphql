import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://14.161.22.76:6001',
    cache: new InMemoryCache(),
});

export default client;
