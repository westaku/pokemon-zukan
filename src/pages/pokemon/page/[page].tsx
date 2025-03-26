import PokeList from "@/components/PokeList";
import PokeListPagination from "@/components/PokeListPagination";
import { useRouter } from "next/router";

export default function PokemonListPage() {
  const router = useRouter();
  const { page } = router.query;
  const pageno = parseInt(page as string, 10);

  return (
    <div>
      <PokeList pageno={pageno} />
      <PokeListPagination currentPage={pageno} />
    </div>
  );
}
