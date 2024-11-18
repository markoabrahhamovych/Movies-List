import { Grid, Skeleton } from "@mui/material";

export const DetailsSkeleton = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Skeleton variant="text" width="60%" height={40} />
        <Skeleton variant="text" width="90%" height={20} />
        <Skeleton variant="text" width="90%" height={20} />
        <Skeleton variant="text" width="75%" height={20} />
        <Skeleton variant="text" width="50%" height={20} />
        <Skeleton
          variant="rectangular"
          width="30%"
          height={40}
          style={{ marginTop: "20px" }}
        />
      </Grid>
    </Grid>
  );
};
