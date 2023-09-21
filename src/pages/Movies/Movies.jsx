import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import { getSearchResult } from "../../utils/utils";
import * as MainApi from "../../utils/MainApi";
import "./Movies.css";
import Preloader from "../../components/Preloader/Preloader";

const Movies = ({ movies }) => {
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

  // const rawMovies = JSON.parse(localStorage.getItem("movies")) || [];

  useEffect(() => {
    if (searchString !== "") {
      const result = getSearchResult(searchString, movies, isShort);
      setFilteredMovies(result);
      localStorage.setItem("filteredMovies", JSON.stringify(result));
    }
  }, [searchString, isShort]);
  const handleFilterChange = () => {
    setIsShort(!isShort);
    localStorage.setItem("isShort", !isShort);
  };
  const handleSearch = (keyWord) => {
    setSearchString(keyWord);
    localStorage.setItem("searchString", keyWord);
  };
  return (
    <section className="movies">
      <SearchForm
        setShowError={setShowError}
        onSubmit={handleSearch}
        handleFilterChange={handleFilterChange}
      />
      <div className="movies__items">
        {isLoading ? <Preloader /> : <MoviesCardList movies={filteredMovies} />}
      </div>
    </section>
  );
};

export default Movies;
