/* eslint-disable camelcase */
// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type SinglePokemon = {
  moves: {
    'move': {
      'name': string,
      'url': string
    },
  }[],
  name: string,
  id: number,
  weight: number,
  height: number,
}

export type AllPokemonsResponse = {
  count: number
  next: string
  previous: null | string
  results: {
    name: string
    url: string
  }[]
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<AllPokemonsResponse, void>({
      query: () => 'pokemon',
    }),
    getPokemonByName: builder.query<SinglePokemon, string | undefined>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonNext: builder.query<AllPokemonsResponse, string | undefined>({
      query: (nextPage) => `${nextPage}`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery, useGetPokemonNextQuery } = pokemonApi

export default pokemonApi
