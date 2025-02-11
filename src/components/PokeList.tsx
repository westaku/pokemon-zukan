"use client";

import { Grid2 } from "@mui/material";
import PokeCard from "./PokeCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "@/lib/pokemon";

type PokeListProps = {
  pageno: number;
};

const PokeList = ({ pageno }: PokeListProps) => {
  const limit = 10;
  const offset = (pageno - 1) * 10;

  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemonList", pageno],
    queryFn: () => fetchPokemonList(limit, offset),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Grid2
      container
      columns={3}
      spacing={{ xs: 2, sm: 3 }}
      sx={{ paddingTop: 3 }}
    >
      {data?.map((pokemon) => (
        <Grid2
          key={pokemon.id}
          size={{ xs: 3, sm: 1 }}
          children={<PokeCard pokemon={pokemon} />}
        />
      ))}
    </Grid2>
  );
};

export default PokeList;
