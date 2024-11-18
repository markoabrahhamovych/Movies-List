import { Typography } from "@mui/material";

export const PageTitle = ({ total = 0 }) => (
  <Typography variant="h4" component="div" gutterBottom>
    Movie List ({total} movies found)
  </Typography>
);
