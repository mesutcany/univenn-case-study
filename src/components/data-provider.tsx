import { ApolloError, useQuery } from "@apollo/client";
import React, { createContext, useContext, useRef, useState } from "react";
import { GET_COMPANY_APPLICANT_LIST } from "../queries";
import { QueryResponse } from "../types";

const DataContext = createContext<{
    query: string;
    setQuery: (query: string) => void
    page: number;
    setPage: (page: number) => void
    data: QueryResponse;
    loading: boolean;
    error: ApolloError | undefined;
    previousData: QueryResponse;
    search: (query: string) => void,
    sort: (key: string, value: string) => void
    getNextPage: () => void
}>({
    query: "",
    setQuery() { },
    page: 1,
    setPage() { },
    data: {
        getCompanyApplicantList: {
            applicants: [],
            pages: 0,
            total: 0
        }
    },
    loading: true,
    previousData: {
        getCompanyApplicantList: {
            applicants: [],
            pages: 0,
            total: 0
        }
    },
    error: undefined,
    search: (query: string) => {
        console.log(query)
    },
    sort: (key: string, value: string) => {
        console.log(key, value)
    },
    getNextPage: () => { }
})

export default function DataProvider({ children }: React.PropsWithChildren<object>) {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const pageRef = useRef(1);

    const { data, loading, error, previousData, fetchMore, refetch } = useQuery(GET_COMPANY_APPLICANT_LIST, {
        notifyOnNetworkStatusChange: true,
        variables: {
            "page": "1",
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
                "query": "",
                "isFavoriteApplicant": false,
                "jobListingId": null
            },
            "sort": { "createdAt": "desc" }
        },
        context: {
            headers: {
                authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`
            },
        },
    });

    function search(query: string) {
        pageRef.current = 1;
        refetch({
            page: pageRef.current,
            filter: {
                query
            }
        })
    }

    function sort(key: string, value: string) {
        pageRef.current = 1
        refetch({
            page: pageRef.current,
            sort: {
                [key]: value
            }
        })
    }

    function getNextPage() {
        pageRef.current++;
        fetchMore({
            variables: {
                page: pageRef.current
            },
            updateQuery(previousData, { fetchMoreResult }) {
                return {
                    getCompanyApplicantList: {
                        ...fetchMoreResult.getCompanyApplicantList,
                        applicants: previousData.getCompanyApplicantList.applicants.concat(fetchMoreResult.getCompanyApplicantList.applicants)
                    }
                }
            }
        })
    }

    return (
        <DataContext.Provider value={{
            data, loading, error, query, setQuery, page, setPage, previousData, search, sort, getNextPage
        }}>
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
    return useContext(DataContext)
}