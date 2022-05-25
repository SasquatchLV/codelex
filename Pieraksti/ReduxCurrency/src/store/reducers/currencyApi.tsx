/* eslint-disable camelcase */
// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type CurrenciesType = {
  key: string,
  value: string,
}

// Define a service using a base URL and expected endpoints
export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest' }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query<CurrenciesType, void>({
      query: () => '/currencies.json',
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCurrenciesQuery } = currencyApi

export default currencyApi
