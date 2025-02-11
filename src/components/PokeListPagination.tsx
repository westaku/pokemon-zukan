import { Pagination } from "@mui/material";
import styled from "styled-components";
// import { useNavigate, useSearchParams } from "react-router-dom";

const PaginationContainer = styled.div`
  padding-top: 5%;
  padding-bottom: 3%;
  & ul {
    display: flex;
    justify-content: center;
  }
`;

const PokeListPagination = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentPage = parseInt(searchParams.get("pageno") || "1", 10);
  // const navigate = useNavigate();

  const hundlePageChange = (
    _e: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    // setSearchParams({ page: pageNumber.toString() });
    // navigate(`/?pageno=${pageNumber}`);
  };

  return (
    <PaginationContainer>
      <Pagination
        count={100}
        // page={currentPage}
        onChange={hundlePageChange}
        color="primary"
      />
    </PaginationContainer>
  );
};

export default PokeListPagination;
