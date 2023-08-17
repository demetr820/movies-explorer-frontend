import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

const SavedMovies = ({ savedMovies }) => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const handleMoviesSearch = query => {};
  return (
    <>
      <div className="movies container">
        <SearchForm
          onSubmit={handleMoviesSearch}
          setIsFilterActive={setIsFilterActive}
          isFilterActive={isFilterActive}
        />
        <section className="movies__items">
          <MoviesCardList movies={savedMovies} />
        </section>
      </div>
    </>
  );
};

export default SavedMovies;
