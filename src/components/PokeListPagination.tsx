import { Pagination, PaginationItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const PaginationContainer = styled("div")({
  paddingTop: "5%",
  paddingBottom: "3%",
  "& ul": {
    display: "flex",
    justifyContent: "center",
  },
});

type PokemonListPaginationProps = {
  currentPage: number;
};

const PokeListPagination = ({ currentPage }: PokemonListPaginationProps) => {
  return (
    <PaginationContainer>
      <Pagination
        count={131}
        page={currentPage}
        color="primary"
        renderItem={(item) => (
          <Link
            href={`/pokemon/page/${item.page}`}
            prefetch={false}
            scroll={false}
            shallow={false}
            style={{ textDecoration: "none" }}
          >
            <PaginationItem {...item} />
          </Link>
        )}
      />
    </PaginationContainer>
  );
};

export default PokeListPagination;
