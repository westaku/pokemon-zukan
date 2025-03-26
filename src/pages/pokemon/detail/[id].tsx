import PokemonDetail from "@/components/PokemonDetail";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = Array.from({ length: 100 }, (_, i) => String(i + 1));
  const paths = ids.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      pokemonIdNumber: parseInt(params?.id as string, 10),
    },
  };
};

export default function PokemonDetailPage({
  pokemonIdNumber,
}: {
  pokemonIdNumber: number;
}) {
  return (
    <div>
      <PokemonDetail pokemonIdNumber={pokemonIdNumber} />
    </div>
  );
}
