import { fetchSinglePokemon } from "@/lib/pokemon";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { styled } from "@mui/material/styles";
import NavButton from "./NavButton";
import type { Pokemon } from "@/types/pokemon";

type PokemonDetailProps = {
  pokemonIdNumber: number;
  initialData: Pokemon;
};

const PokeCardContainer = styled("div")({
  display: "flex",
});

const PokemonDetail = ({
  pokemonIdNumber,
  initialData,
}: PokemonDetailProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["SinglePokemon", pokemonIdNumber],
    queryFn: () => fetchSinglePokemon(pokemonIdNumber),
    staleTime: 1000 * 60 * 5,
    initialData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const prevId = Math.max(pokemonIdNumber - 1, 1);
  const nextId = pokemonIdNumber + 1;

  return (
    <PokeCardContainer>
      <NavButton isPrev={true} href={`/pokemon/detail/${prevId}`} />
      <Card
        sx={{
          width: { xs: "90%", sm: "60%" },
          margin: "0 auto",
          textAlign: "center",
          marginTop: 3,
        }}
        raised={true}
      >
        <CardMedia component="img" height="60%" image={data?.image} />
        <CardContent
          sx={{
            height: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography gutterBottom variant="h5">
            {data?.name}
          </Typography>
          <Typography>{data?.types.join(", ")}</Typography>
          <Typography>{data?.weight}</Typography>
          <Typography>{data?.height}</Typography>
          <Typography>{data?.abilities.join(", ")}</Typography>
        </CardContent>
      </Card>
      <NavButton isPrev={false} href={`/pokemon/detail/${nextId}`} />
    </PokeCardContainer>
  );
};

export default PokemonDetail;
