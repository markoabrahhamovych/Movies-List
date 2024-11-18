import axios from "axios";
import { commonListUrl, listBySearch } from "./apiRouts.js";

const extractFetchParams = (params = {}) => {
  return {
    params,
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Yjc5NDMzNTI1OTg0NjRkYTdiMTQ0MjU0ZDA2N2U0NyIsIm5iZiI6MTczMTg2NDE0OS45ODU3MzIsInN1YiI6IjY3MzhiYWZhNDQzNTQzMTkxY2NiYzdhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJOODXatMLH3_tahB1Uw5xiXN7e3zkGHGzD7O-02_pY`,
    },
  };
};

export const onGetListMovies = ({ params = {} }) => {
  const fetchParams = extractFetchParams(params);
  return axios.get(commonListUrl, fetchParams);
};

export const onGetListMoviesBySearch = ({ params = {} }) => {
  const fetchParams = extractFetchParams(params);
  return axios.get(listBySearch, fetchParams);
};
