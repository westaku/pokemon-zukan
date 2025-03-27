import { apiClient } from "./axiosInstance";
import type { Pokemon } from "@/types/pokemon";
import type { PokemonListResponse, PokemonResponse } from "@/types/api";

export const fetchPokemonList = async (
  limit: number = 10,
  offset: number = 0
) => {
  try {
    const response = await apiClient.get<PokemonListResponse>("/pokemon", {
      params: { limit, offset },
    });
    // Promise.all用のpromisesをまとめる
    const promises = response.data.results.map(async (result) => {
      const individualPokemonResponse = await apiClient.get<PokemonResponse>(
        result.url
      );
      const typeList: string[] = individualPokemonResponse.data.types.map(
        (type) => type.type.name
      );
      const abilityList: string[] =
        individualPokemonResponse.data.abilities.map(
          (ability) => ability.ability.name
        );
      return {
        id: individualPokemonResponse.data.id,
        name: individualPokemonResponse.data.name,
        image: individualPokemonResponse.data.sprites.front_default,
        types: typeList,
        weight: individualPokemonResponse.data.weight,
        height: individualPokemonResponse.data.height,
        abilities: abilityList,
      };
    });

    const pokemonList: Pokemon[] = await Promise.all(promises);
    return pokemonList;
  } catch (error) {
    console.error("Failed to fetch Pokémon list:", error);
    throw new Error("Failed to fetch Pokémon list");
  }
};

export const fetchSinglePokemon = async (pokemonId: number) => {
  try {
    const response = await apiClient.get<PokemonResponse>(
      `/pokemon/${pokemonId}`
    );
    return {
      id: response.data.id,
      name: response.data.name,
      image: response.data.sprites.front_default,
      types: response.data.types.map((type) => type.type.name),
      weight: response.data.weight,
      height: response.data.height,
      abilities: response.data.abilities.map((ability) => ability.ability.name),
    };
  } catch (error) {
    console.error("Failed to fetch Pokémon list:", error);
    throw new Error("Failed to fetch Pokémon list");
  }
};
