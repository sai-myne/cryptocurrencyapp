import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RAPID_API_KEY } from '../key'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory: builder.query({
            // query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
            query: ({ coinId, timePeriod }) => ({url: `${baseUrl}/coin/${coinId}/history`, params: {timePeriod: timePeriod}, headers: cryptoApiHeaders})
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetExchangesQuery,
    useGetCryptosDetailsQuery,
    useGetCryptosHistoryQuery
} = cryptoApi
