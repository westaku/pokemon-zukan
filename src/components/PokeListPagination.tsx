import {
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const TOTAL_PAGES = 131;

const PaginationContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(4, 0),
  "& ul": {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
  },
}));

const StyledPaginationItem = styled(PaginationItem)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

interface PokemonListPaginationProps {
  currentPage: number;
}

const PokeListPagination: React.FC<PokemonListPaginationProps> = ({
  currentPage,
}) => {
  const renderPaginationItem = (item: PaginationRenderItemParams) => (
    <Link
      href={`/pokemon/page/${item.page}`}
      prefetch={false}
      scroll={false}
      shallow={false}
      style={{ textDecoration: "none" }}
    >
      <StyledPaginationItem {...item} />
    </Link>
  );

  return (
    <PaginationContainer>
      <Pagination
        count={TOTAL_PAGES}
        page={currentPage}
        color="primary"
        renderItem={renderPaginationItem}
        size="large"
        showFirstButton
        showLastButton
      />
    </PaginationContainer>
  );
};

export default PokeListPagination;
