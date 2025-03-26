import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
  weight: number;
  height: number;
  abilities: string[];
};
type PokeCardProps = {
  pokemon: Pokemon;
};

const PokeCard = ({ pokemon }: PokeCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/detail/${pokemon.id}`);
  };

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
      <CardActionArea sx={{ padding: "3% 5%" }} onClick={handleClick}>
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
    </Card>
  );
};

export default PokeCard;
