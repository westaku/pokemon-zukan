import PokemonDetail from "@/components/PokemonDetail";

export default function PokemonListPageDefault({
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
