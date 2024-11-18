import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { ListMovies } from "../../components/listMovies/listMovies.jsx";
import { ListSkeleton } from "../../components/listSkeleton/listSkeleton.jsx";
import { Pagination } from "../../components/pagination/pagination.jsx";
import {
  onGetListMovies,
  onGetListMoviesBySearch,
} from "../../api/getListMovies.js";
import { onConvertData } from "../../utils/converUtils.js";
import { useDebounce } from "../../hooks/useDebouce.js";
import { PageTitle } from "./components/title.jsx";
import { SearchField } from "./components/searchField.jsx";

const perPage = 19;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [moviesData, setMoviesData] = useState({
    totalPages: 0,
    total: 0,
    page: 1,
    list: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debounceValue = useDebounce(searchValue, 1000);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const onGetFetchData = ({ data = [] }) => {
    const { results, total_results } = data || {};
    const convertList = onConvertData(results);
    setMoviesData({ list: convertList, total: total_results });
  };

  const onGetList = ({ options }) => {
    setLoading(true);
    onGetListMovies({ params: options })
      .then((response) => {
        onGetFetchData({ data: response?.data });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onGetListBySearch = ({ options }) => {
    setLoading(true);
    onGetListMoviesBySearch({ params: options })
      .then((response) => {
        onGetFetchData({ data: response?.data });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      const options = {
        query: searchValue,
        page: currentPage,
      };
      onGetListBySearch({
        options,
      });
    } else {
      const options = {
        page: currentPage,
      };
      onGetList({ options });
    }
  }, [currentPage, debounceValue]);

  const titleContainer = <PageTitle total={moviesData?.total} />;

  const searchField = (
    <SearchField searchValue={searchValue} handleChange={handleChange} />
  );

  const paginationContainer = moviesData?.total > 19 && (
    <Pagination
      total={moviesData.total}
      loading={loading}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  );

  const moviesContainer = loading ? (
    <ListSkeleton count={perPage} />
  ) : (
    <ListMovies list={moviesData.list || []} />
  );

  return (
    <Container sx={{ padding: "100px 0" }}>
      {titleContainer}
      {searchField}
      {moviesContainer}
      {paginationContainer}
    </Container>
  );
};
export default Home;
