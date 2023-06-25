import React, { useContext } from "react";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCardList.css";

const MoviesCardList = () => {
  const { movies } = useContext(CurrentUserContext);
  movies.length = 10;
  const moviesCards = movies.map(cardItem => {
    return (
      <li key={cardItem.id}>
        <MoviesCard {...cardItem} />
      </li>
    );
  });
  return <ul className="card-list list-reset">{moviesCards}</ul>;
};

export default MoviesCardList;
