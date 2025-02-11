"use client";

import { fetchSinglePokemon } from "@/lib/pokemon";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import NavButton from "./NavButton";

type PokemonDetailProps = {
  pokemonIdNumber: number;
};

const PokeCardContainer = styled.div`
  display: flex;
`;

const PokemonDetail = ({ pokemonIdNumber }: PokemonDetailProps) => {
  const router = useRouter();

  const { data, error, isLoading } = useQuery({
    queryKey: ["SinglePokemon", pokemonIdNumber],
    queryFn: () => fetchSinglePokemon(pokemonIdNumber),
    staleTime: 1000 * 60 * 5,
  });

  const onClickNav = (diff: number) => {
    const prevId = Math.max(pokemonIdNumber + diff, 1);
    router.push(`/pokemon/detail/${prevId}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <PokeCardContainer>
      <NavButton isPrev={true} hundleClick={() => onClickNav(-1)} />
      <Card
        sx={{
          width: { xs: "80%", sm: "70%" },
          height: "70%",
          margin: "0 auto",
          textAlign: "center",
          marginTop: 3,
        }}
        raised={true}
      >
        <CardMedia component="img" height="100%" image={data?.image} sx={{}} />
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
      <NavButton isPrev={false} hundleClick={() => onClickNav(1)} />
    </PokeCardContainer>
  );
};

export default PokemonDetail;
