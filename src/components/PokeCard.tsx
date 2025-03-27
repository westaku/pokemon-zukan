import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import type { Pokemon } from "@/types/pokemon";

type PokeCardProps = {
  pokemon: Pokemon;
};

const PokeCard = ({ pokemon }: PokeCardProps) => {
  return (
    <Card
      sx={{
        width: { xs: "80%", sm: "90%" },
        minHeight: { xs: "10%", sm: "50%" },
        margin: "0 auto",
        textAlign: "center",
      }}
      raised={true}
    >
      <Link
        href={`/pokemon/detail/${pokemon.id}`}
        prefetch={false}
        scroll={false}
        shallow={false}
        style={{ textDecoration: "none" }}
      >
        <CardActionArea sx={{ padding: "3% 5%" }}>
          <CardMedia component="img" height="100%" image={pokemon.image} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {pokemon.name}
            </Typography>
            <Typography>{pokemon.types.join(", ")}</Typography>
            <Typography>{pokemon.weight}</Typography>
            <Typography>{pokemon.height}</Typography>
            <Typography>{pokemon.abilities.join(", ")}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PokeCard;
