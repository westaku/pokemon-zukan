"use client";

import { fetchSinglePokemon } from "@/lib/pokemon";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

type PokemonDetailProps = {
  pokemonIdNumber: number;
};

const PokemonDetail = ({ pokemonIdNumber }: PokemonDetailProps) => {
  console.log("pokemonIdNumberです", pokemonIdNumber);

  const { data, error, isLoading } = useQuery({
    queryKey: ["SinglePokemon", pokemonIdNumber],
    queryFn: () => fetchSinglePokemon(pokemonIdNumber),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Card
      sx={{
        width: { xs: "80%", sm: "90%" },
        margin: "0 auto",
        textAlign: "center",
        marginTop: 3,
      }}
      raised={true}
    >
      <CardMedia component="img" height="100%" image={data?.image} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {data?.name}
        </Typography>
        <Typography>{data?.types.join(", ")}</Typography>
        <Typography>{data?.weight}</Typography>
        <Typography>{data?.height}</Typography>
        <Typography>{data?.abilities.join(", ")}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonDetail;
