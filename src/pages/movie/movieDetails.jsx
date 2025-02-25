import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  CardMedia,
  Button,
  Grid,
  Box,
  Chip,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { DetailsSkeleton } from "../../components/detailsSkeleton/detailsSkeleton.jsx";

const GenreList = ({ list = [] }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", gap: 1, padding: "20px 0" }}
    >
      {(list || []).map((i) => (
        <Chip label={i?.name} color="success" variant="outlined" id={i?.id} />
      ))}
    </Box>
  );
};

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    status: null,
    title: null,
    poster_path: null,
    vote_average: null,
    overview: null,
    genres: [],
  });

  const [loading, setLoading] = useState(false);

  const fetchMovieDetails = async ({ id }) => {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=7b7943352598464da7b144254d067e47`,
      )
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovieDetails({ id });
  }, [id]);

  const imageContainer = (
    <Grid item xs={12} md={4}>
      <CardMedia
        component="img"
        height="400"
        image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        style={{ marginBottom: "20px" }}
      />
    </Grid>
  );

  const titleContainer = (
    <Typography variant="h4" gutterBottom>
      {movie.title}
    </Typography>
  );

  const releaseDateContainer = (
    <Typography variant="body1" gutterBottom>
      {movie.release_date}
    </Typography>
  );

  const overviewContainer = (
    <Typography variant="body1" paragraph>
      {movie.overview}
    </Typography>
  );

  const rateContainer = (
    <Typography variant="h6" gutterBottom>
      Rating: {movie.vote_average} / 10
    </Typography>
  );

  const backButtonContainer = (
    <Button variant="contained" color="primary" component={Link} to="/">
      Back to Movie List
    </Button>
  );
  const genresList = <GenreList list={movie?.genres || []} />;

  const detailsContainer = (
    <Grid item xs={12} md={8}>
      {titleContainer}
      {releaseDateContainer}
      {overviewContainer}
      {genresList}
      {rateContainer}
      {backButtonContainer}
    </Grid>
  );

  const detailsWrapper = (
    <Grid container spacing={4}>
      {imageContainer}
      {detailsContainer}
    </Grid>
  );

  const layoutDetails = loading ? <DetailsSkeleton /> : detailsWrapper;

  return <Container sx={{ padding: "80px 20px" }}>{layoutDetails}</Container>;
};

export default MovieDetails;
