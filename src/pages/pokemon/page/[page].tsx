import PokeList from "@/components/PokeList";
import PokeListPagination from "@/components/PokeListPagination";
import { GetStaticProps, GetStaticPaths } from "next";
import { fetchPokemonList } from "@/lib/pokemon";
import type { Pokemon } from "@/components/PokeList";

type Props = {
  pageno: number;
  buildTime: string; // ビルド時刻を追加
  initialData: Pokemon[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("getStaticPaths が実行されました"); // ビルド時の実行を確認
  const pages = Array.from({ length: 10 }, (_, i) => String(i + 1));
  const paths = pages.map((page) => ({
    params: { page },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  console.log("getStaticProps が実行されました"); // ビルド時の実行を確認
  const page = parseInt(context.params?.page as string, 10);
  const limit = 10;
  const offset = (page - 1) * 10;

  // サーバーサイドでデータを取得
  const initialData = await fetchPokemonList(limit, offset);

  console.log("initialData", initialData);

  return {
    props: {
      pageno: page,
      buildTime: new Date().toISOString(), // ビルド時刻を追加
      initialData,
    },
  };
};

export default function PokemonListPage({
  pageno,
  buildTime,
  initialData,
}: Props) {
  return (
    <div>
      <p>このページは {buildTime} にビルドされました</p>
      <p>SSGで取得したデータ数: {initialData.length}</p>
      <PokeList pageno={pageno} initialData={initialData} />
      <PokeListPagination currentPage={pageno} />
    </div>
  );
}
