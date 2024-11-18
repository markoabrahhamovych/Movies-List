import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemContainer = ({ item }) => {
  const { id, img, name, rating } = item || {};

  const titleBlock = (
    <Typography variant="h5" component="div">
      {name}
    </Typography>
  );

  const ratingBlock = <Rating value={rating} readOnly precision={0.1} />;

  const detailsBlock = (
    <CardContent>
      {titleBlock}
      {ratingBlock}
    </CardContent>
  );

  const imgBlock = (
    <CardMedia component="img" height="300" image={img} alt={name} />
  );

  const linkBlock = (
    <Link
      to={`/movie/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {imgBlock}
      {detailsBlock}
    </Link>
  );
  return <Card>{linkBlock}</Card>;
};

const ListContainer = ({ children }) => {
  return (
    <Grid container spacing={4}>
      {children}
    </Grid>
  );
};

export const ListMovies = ({
  list = [],
  ItemElement = ItemContainer,
  ListElement = ListContainer,
}) => {
  const listContainer = (list || []).map((i) => (
    <Grid item xs={12} sm={6} md={4} key={i.id}>
      <ItemElement item={i} />
    </Grid>
  ));

  return <ListElement>{listContainer}</ListElement>;
};
