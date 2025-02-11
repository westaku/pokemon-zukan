import PokeListPagination from "@/components/PokeListPagination";

export default function PokemonPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { pageNumber: string };
}) {
  const currentPageNumber = parseInt(params.pageNumber, 10);
  return (
    <div>
      {children}
      <PokeListPagination currentPage={currentPageNumber} />
    </div>
  );
}
