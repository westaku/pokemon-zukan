import PokemonDetail from "@/components/PokemonDetail";

export async function generateStaticParams() {
  // 1〜100の配列
  const ids = Array.from({ length: 100 }, (_, i) => String(i + 1));

  // [{ id: "1" }, { id: "2" } ... { id: "100"}] の形で返す
  console.log("idsです");
  console.log(ids.map((id) => ({ id })));
  return ids.map((id) => ({ id }));
}

export const dynamic = "force-dynamic";

export default function PokemonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const pokemonIdNumber: number = parseInt(params.id, 10);

  return (
    <div>
      <PokemonDetail pokemonIdNumber={pokemonIdNumber} />
    </div>
  );
}
