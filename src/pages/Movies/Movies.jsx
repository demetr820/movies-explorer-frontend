import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import "./Movies.css";

const Movies = ({ movies }) => {
  return (
    <div className="movies">
      <SearchForm />
      <section className="movies__items">
        <MoviesCardList />
      </section>
      <div className="movies__more">
        <button className="movies__button">Ещё</button>
      </div>
    </div>
  );
};

export default Movies;
