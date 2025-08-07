import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
    console.log('process env', process.env);
  return new ApolloClient({
    uri: process.env.SERVER_URI || "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
};
