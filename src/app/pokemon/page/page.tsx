import PokeList from "@/components/PokeList";

export const dynamic = "force-dynamic";

export default function PokemonListPageDefault() {
  return (
    <div>
      <PokeList pageno={1} />
    </div>
  );
}
