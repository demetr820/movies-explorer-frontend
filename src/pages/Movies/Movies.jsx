import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import { getSearchResult } from "../../utils/utils";
import * as MoviesApi from "../../utils/MoviesApi";
import "./Movies.css";
import Preloader from "../../components/Preloader/Preloader";

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isError, setIsError] = useState("");

  const movies = JSON.parse(localStorage.getItem("movies")) || [];

  useEffect(() => {
    const lastSearchResult =
      JSON.parse(localStorage.getItem("searchResult")) || [];
    const lastQuery = localStorage.getItem("lastQuery") || "";
    const lastFilterState = localStorage.getItem("isShort") || false;
    lastSearchResult && setSearchedMovies(lastSearchResult);
    lastFilterState && setIsFilterActive(lastFilterState);
    lastQuery && setQuery(lastQuery);
  }, []);
  // отобразить список найденных фильмов
  const handleRenderMovies = movies => {
    setSearchedMovies(movies);
    localStorage.setItem("searchResult", JSON.stringify(movies));
    movies.length === 0 ? setIsError("Ничего не найдено:-(") : setIsError("");
  };
  const handleFilterMovies = (query, isFilterActive) => {
    if (!movies.length) {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then(movies => {
          localStorage.setItem("movies", JSON.stringify(movies));
          const filterResult = query
            ? getSearchResult(query, movies, isFilterActive)
            : [];
          handleRenderMovies(filterResult);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      const filterResult = query
        ? getSearchResult(query, movies, isFilterActive)
        : [];
      handleRenderMovies(filterResult);
    }
    console.log(query);
    console.log(searchedMovies);
    console.log(isFilterActive);
  };
  // действие при сабмите формы поиска
  const handleMoviesSearch = query => {
    setQuery(query);
    localStorage.setItem("lastQuery", query);
    handleFilterMovies(query, isFilterActive);
  };
  // ☑️ Включить или отключить фильтр короткометражек
  const handleFilterChange = isChecked => {
    setIsFilterActive(isChecked);
    localStorage.setItem("isShort", isChecked);
    handleFilterMovies(query, isFilterActive);
  };
  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleMoviesSearch}
        // setIsFilterActive={setIsFilterActive}
        isFilterActive={isFilterActive}
        handleFilterMovies={handleFilterChange}
      />
      <div className="movies__items">
        {isLoading ? <Preloader /> : <MoviesCardList movies={searchedMovies} />}
      </div>
    </section>
  );
};

export default Movies;
