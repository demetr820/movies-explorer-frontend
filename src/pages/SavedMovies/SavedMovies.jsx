import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem("savedMovies")) || []
  );
  const [isShort, setIsShort] = useState(false);
  const handleMoviesSearch = (query) => {};
  return (
    <>
      <div className="movies container">
        <SearchForm
          onSubmit={handleMoviesSearch}
          setIsFilterActive={setIsShort}
          isFilterActive={isShort}
        />
        <section className="movies__items">
          <MoviesCardList movies={savedMovies} />
        </section>
      </div>
    </>
  );
};

export default SavedMovies;
