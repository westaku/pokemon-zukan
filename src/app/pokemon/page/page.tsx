import PokeList from "@/components/PokeList";
import PokeListPagination from "@/components/PokeListPagination";

export const dynamic = "force-dynamic";

export default function PokemonListPageDefault() {
  return (
    <div>
      <PokeList pageno={1} />
      <PokeListPagination currentPage={1} />
    </div>
  );
}
