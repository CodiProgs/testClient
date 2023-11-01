import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject, Observable, gql } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client"

const uploadLink = createUploadLink({
    uri: "https://testserver-production-2d01.up.railway.app/graphql",//https://caradverserver-production.up.railway.app/graphql
    credentials: "include",
    headers: {
        "apollo-require-preflight": "true",
    },
})

export const client = new ApolloClient({
    uri: "https://testserver-production-2d01.up.railway.app/graphql",
    cache: new InMemoryCache(),
    credentials: "include",
    headers: {
        "apollo-require-preflight": "true",
    },
    link: ApolloLink.from([uploadLink]),
})