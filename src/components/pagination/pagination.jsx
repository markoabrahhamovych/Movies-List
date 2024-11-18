import { Pagination as PaginationMui } from "@mui/material";

export const Pagination = ({
  total = 0,
  currentPage = 1,
  loading = false,
  handlePageChange = () => {},
}) => {
  return (
    <PaginationMui
      sx={{ paddingTop: "20px" }}
      count={total}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      disabled={loading}
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
};
