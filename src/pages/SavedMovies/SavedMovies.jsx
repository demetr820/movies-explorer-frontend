import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { data } from "../../utils/data/data";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import "./SavedMovies.css";

const SavedMovies = () => {
  data.length = 10;
  const moviesCards = data.map(cardItem => {
    return <MoviesCard key={cardItem.id} {...cardItem} />;
  });
  return (
    <>
      <div className="movies container">
        <SearchForm />
        <section className="movies__items">{moviesCards}</section>
        <div className="movies__more">
          <button className="movies__button">Ещё</button>
        </div>
      </div>
    </>
  );
};

export default SavedMovies;
