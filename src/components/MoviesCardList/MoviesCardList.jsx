import React from "react";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { data } from "../../utils/data/data";
import "./MoviesCardList.css";

const MoviesCardList = () => {
  data.length = 10;
  const moviesCards = data.map(cardItem => {
    return (
      <li>
        <MoviesCard key={cardItem.id} {...cardItem} />
      </li>
    );
  });
  return <ul className="card-list list-reset">{moviesCards}</ul>;
};

export default MoviesCardList;
