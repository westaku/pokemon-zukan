import PokemonDetail from "@/components/PokemonDetail";

export const dynamic = "force-dynamic";

export default function PokemonDetailPage() {
  return (
    <div>
      <PokemonDetail pokemonIdNumber={1} />
    </div>
  );
}
