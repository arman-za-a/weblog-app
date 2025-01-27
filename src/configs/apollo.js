import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQLAPI,
    cache: new InMemoryCache(),
});
export default client;