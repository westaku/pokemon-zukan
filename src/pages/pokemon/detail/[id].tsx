import PokemonDetail from "@/components/PokemonDetail";
import { GetStaticProps, GetStaticPaths } from "next";
import { fetchSinglePokemon } from "@/lib/pokemon";
import type { Pokemon } from "@/types/pokemon";

type Props = {
  pokemonIdNumber: number;
  buildTime: string;
  initialData: Pokemon;
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("getStaticPaths が実行されました");
  const ids = Array.from({ length: 100 }, (_, i) => String(i + 1));
  const paths = ids.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const pokemonIdNumber = parseInt(params?.id as string, 10);
  console.log(`${pokemonIdNumber}がSSGされました`);

  // サーバーサイドでデータを取得
  const initialData = await fetchSinglePokemon(pokemonIdNumber);

  return {
    props: {
      pokemonIdNumber,
      buildTime: new Date().toISOString(),
      initialData,
    },
  };
};

export default function PokemonDetailPage({
  pokemonIdNumber,
  buildTime,
  initialData,
}: Props) {
  return (
    <div>
      <p>このページは {buildTime} にビルドされました</p>
      <PokemonDetail
        pokemonIdNumber={pokemonIdNumber}
        initialData={initialData}
      />
    </div>
  );
}
