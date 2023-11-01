"use client";

import { GetHelloQuery } from '../gql/graphql';
import { HELLO } from '@/graphql/queries/Hello';
import { useQuery } from '@apollo/client';
import React from 'react';


function QueryHello () {
    const {data, loading, error} = useQuery<GetHelloQuery>(HELLO)

    return (
        <div>
            {data?.hello}
        </div>
    );
}

export default QueryHello;