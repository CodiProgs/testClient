import { gql } from "@apollo/client";


export const HELLO = gql`
    query GetHello {
        hello
    }
`