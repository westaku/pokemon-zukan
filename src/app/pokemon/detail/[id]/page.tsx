import PokemonDetail from "@/components/PokemonDetail";

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
