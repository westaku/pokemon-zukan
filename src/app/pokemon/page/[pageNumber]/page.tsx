import PokeList from "@/components/PokeList";

export const dynamic = "force-dynamic";

export default function PokemonListPage({
  params,
}: {
  params: { pageNumber: string };
}) {
  const currentPage = parseInt(params.pageNumber, 10);

  return (
    <div>
      <PokeList pageno={currentPage} />
    </div>
  );
}
