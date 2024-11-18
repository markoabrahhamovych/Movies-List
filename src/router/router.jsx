import { HOME, MOVIE_DETAILS } from "./routs.js";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/home/home.jsx"));
export const MovieDetails = lazy(
  () => import("../pages/movie/movieDetails.jsx"),
);
export const NotFoundPage = lazy(() => import("../pages/notFound/notFound.js"));

export const Router = () => {
  return (
    <Routes>
      <Route path={HOME} exact element={<HomePage />} />
      <Route path={MOVIE_DETAILS} exact element={<MovieDetails />} />
      <Route path={HOME} exact element={<HomePage />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};
