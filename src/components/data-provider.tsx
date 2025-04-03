import { ApolloError, useQuery } from "@apollo/client";
import React, { createContext, useContext, useState } from "react";
import { GET_COMPANY_APPLICANT_LIST } from "../queries";

const DataContext = createContext<{
    query: string;
    setQuery: (query: string) => void
    page: number;
    setPage: (page: number) => void
    data: any;
    loading: boolean;
    error: ApolloError | undefined;
    previousData: any;
    sort: { key: string; value: string };
    setSort: (sort: { key: string; value: string }) => void
}>({
    query: "",
    setQuery() { },
    page: 1,
    setPage() { },
    sort: "createdAt",
    setSort() { },
    data: null,
    loading: true,
    previousData: null,
    error: undefined,
})

export default function DataProvider({ children }: React.PropsWithChildren<object>) {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState({
        key: "createdAt",
        value: "desc"
    });

    const { data, loading, error, previousData } = useQuery(GET_COMPANY_APPLICANT_LIST, {
        variables: {
            "page": page,
            "pageSize": 18,
            "filter": {
                "filterParameters": [
                    {
                        "name": "fullName",
                        "operator": "contains",
                        "filterVariable": "",
                        "logicalOperator": "AND"
                    }
                ],
                "query": query,
                "isFavoriteApplicant": false,
                "jobListingId": null
            },
            "sort": {
                [sort.key]: sort.value
            }
        },
        context: {
            headers: {
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsbnZvcTZzYjAwNmQzd21xZHJhNmIxZDIiLCJpYXQiOjE3NDM0OTgzODcsImV4cCI6MTc3NTA1NTk4N30.mtg56U54FxHozIAAfEkP2peFnZIzegV0hwjV2f7L0uk"
            },
        }
    });

    return (
        <DataContext.Provider value={{
            data, loading, error, query, setQuery, page, setPage, previousData, sort, setSort
        }}>
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
    return useContext(DataContext)
}