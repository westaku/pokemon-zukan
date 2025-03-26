import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const PaginationContainer = styled.div`
  padding-top: 5%;
  padding-bottom: 3%;
  & ul {
    display: flex;
    justify-content: center;
  }
`;

type PokemonListPaginationProps = {
  currentPage: number;
};

const PokeListPagination = ({ currentPage }: PokemonListPaginationProps) => {
  const router = useRouter();

  const hundlePageChange = (
    _e: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    router.push(`/pokemon/page/${pageNumber}`);
  };

  return (
    <PaginationContainer>
      <Pagination
        count={131}
        page={currentPage}
        onChange={hundlePageChange}
        color="primary"
      />
    </PaginationContainer>
  );
};

export default PokeListPagination;
