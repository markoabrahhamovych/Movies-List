export const onConvertData = (data) => {
  return (data || []).map((i) => ({
    id: i?.id,
    name: i?.title,
    date: i?.release_date,
    img: `https://image.tmdb.org/t/p/original${i.poster_path}`,
    rating: i?.vote_average,
  }));
};
