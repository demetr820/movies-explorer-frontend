import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import { getSearchResult } from "../../utils/utils";
import Preloader from "../../components/Preloader/Preloader";
import "./Movies.css";

const Movies = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("filteredMovies")) || []
  );
  const [searchString, setSearchString] = useState(
    localStorage.getItem("searchString") || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isShort, setIsShort] = useState(false);

  const handleFilterChange = () => {
    setIsShort(!isShort);
    localStorage.setItem("isShort", !isShort);
  };
  const handleSearch = (keyWord) => {
    setSearchString(keyWord);
    localStorage.setItem("searchString", keyWord);
  };
  useEffect(() => {
    if (localStorage.getItem("isShort")) {
      setIsShort(JSON.parse(localStorage.getItem("isShort")));
    }
  }, []);
  useEffect(() => {
    if (searchString !== "") {
      const result = getSearchResult(searchString, movies, isShort);
      setFilteredMovies(result);
      localStorage.setItem("filteredMovies", JSON.stringify(result));
    }
  }, [searchString, isShort, movies]);
  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleSearch}
        handleFilterChange={handleFilterChange}
        isFilterActive={isShort}
      />
      <div className="movies__items">
        {isLoading ? <Preloader /> : <MoviesCardList movies={filteredMovies} />}
      </div>
    </section>
  );
};

export default Movies;
