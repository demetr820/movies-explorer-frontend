import React from "react";
import LikeIcon from "../LikeIcon/LikeIcon";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

const MoviesCard = ({ nameRU, duration, image, trailerLink }) => {
  const { pathname } = useLocation();
  const isSavedMovies = pathname === "/saved-movies";
  const isLiked = true;
  const endpoint = "https://api.nomoreparties.co/";
  const formatDuration = minutes => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м`;
  };
  return (
    <article className="movies-card">
      <a className="movies-card__link" href={trailerLink}>
        <img
          src={`${endpoint}${image.formats.thumbnail.url}`}
          alt={nameRU}
          className="movies-card__thumb"
        />
      </a>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{nameRU}</h2>
        <span className="movies-card__duration">
          {formatDuration(duration)}
        </span>
        <button className="movies-card__like">
          <LikeIcon isLiked={isLiked} isSavedMovies={isSavedMovies} />
        </button>
      </div>
    </article>
  );
};

export default MoviesCard;
