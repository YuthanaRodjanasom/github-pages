import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import PokemonResponse from "./response/PokemonResponse";

const PokemonApiService = createApi({
  reducerPath: "pokemon_api_service",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonResponse, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonQuery } = PokemonApiService;

export default PokemonApiService;
