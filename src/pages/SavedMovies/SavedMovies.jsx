import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import * as MainApi from "../../utils/MainApi";
import { getSearchResult } from "../../utils/utils";
import "./SavedMovies.css";

const SavedMovies = ({ savedMovies }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [isShort, setIsShort] = useState(false);
  useEffect(() => {
    const result = getSearchResult(searchString, savedMovies, isShort);
    setFilteredMovies(result);
  }, [searchString, isShort, savedMovies]);

  const handleFilterChange = () => {
    setIsShort(!isShort);
  };
  const handleSearch = (keyWord) => {
    setSearchString(keyWord);
  };
  return (
    <>
      <div className="movies container">
        <SearchForm
          onSubmit={handleSearch}
          handleFilterChange={handleFilterChange}
          isFilterActive={isShort}
        />
        <section className="movies__items">
          <MoviesCardList movies={filteredMovies} />
        </section>
      </div>
    </>
  );
};

export default SavedMovies;
