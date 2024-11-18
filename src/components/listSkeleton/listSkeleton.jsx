import { Grid, Skeleton } from "@mui/material";

export const ListSkeleton = ({ count = 10 }) => {
  return (
    <Grid container spacing={3}>
      {Array.from(new Array(count)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Skeleton variant="rectangular" height={300} />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </Grid>
      ))}
    </Grid>
  );
};
