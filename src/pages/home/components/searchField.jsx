import { TextField } from "@mui/material";

export const SearchField = ({ searchValue = "", handleChange = () => {} }) => (
  <TextField
    label="Search"
    variant="outlined"
    value={searchValue}
    onChange={handleChange}
    fullWidth
    margin="normal"
  />
);
