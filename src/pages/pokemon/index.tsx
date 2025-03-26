import PokeList from "@/components/PokeList";
import PokeListPagination from "@/components/PokeListPagination";

export default function PokemonListPage() {
  return (
    <div>
      <PokeList pageno={1} />
      <PokeListPagination currentPage={1} />
    </div>
  );
}
