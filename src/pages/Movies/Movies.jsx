import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import { getSearchResult } from "../../utils/utils";
import * as MoviesApi from "../../utils/MoviesApi";
import "./Movies.css";
import Preloader from "../../components/Preloader/Preloader";

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("filteredMovies")) || []
  );
  const [searchString, setSearchString] = useState(
    localStorage.getItem("searchString") || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isShort, setIsShort] = useState(
    JSON.parse(localStorage.getItem("isShort")) || false
  );
  const [showError, setShowError] = useState("");

  const rawMovies = JSON.parse(localStorage.getItem("movies")) || [];

  // отобразить список найденных фильмов
  // const handleRenderMovies = (movies) => {
  //   setSearchedMovies(movies);
  //   localStorage.setItem("searchResult", JSON.stringify(movies));
  //   movies.length === 0
  //     ? setShowError("Ничего не найдено:-(")
  //     : setShowError("");
  // };
  // const handleFilterMovies = (query, isFilterActive) => {
  //   if (movies.length === 0) {
  //     setIsLoading(true);
  //     MoviesApi.getMovies()
  //       .then((movies) => {
  //         localStorage.setItem("movies", JSON.stringify(movies));
  //         const filterResult = query
  //           ? getSearchResult(query, movies, isFilterActive)
  //           : [];
  //         handleRenderMovies(filterResult);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   } else {
  //     const filterResult = query
  //       ? getSearchResult(query, movies, isFilterActive)
  //       : [];
  //     handleRenderMovies(filterResult);
  //   }
  // };
  // действие при сабмите формы поиска
  // const handleMoviesSearch = (query) => {
  //   setQuery(query);
  //   localStorage.setItem("lastQuery", query);
  //   handleFilterMovies(query, isFilterActive);
  // };
  // ☑️ Включить или отключить фильтр короткометражек
  // const handleFilterChange = (isChecked) => {
  //   setIsFilterActive(isChecked);
  //   localStorage.setItem("isShort", isChecked);
  //   handleFilterMovies(query, isFilterActive);
  // };
  useEffect(() => {
    const result = getSearchResult(searchString, rawMovies, isShort);
    setFilteredMovies(result);
    localStorage.setItem("filteredMovies", JSON.stringify(result));
  }, [searchString, isShort]);
  return (
    <section className="movies">
      <SearchForm
        setShowError={setShowError}
        onSubmit={setSearchString}
        handleFilterChange={setIsShort}
        isFilterActive={isShort}
      />
      <div className="movies__items">
        {isLoading ? <Preloader /> : <MoviesCardList movies={filteredMovies} />}
      </div>
    </section>
  );
};

export default Movies;
