import React, { useContext, useEffect } from "react";
import LikeIcon from "../LikeIcon/LikeIcon";
import { useLocation } from "react-router-dom";
import { formatDuration, imageUrlCheck, endpoint } from "../../utils/utils";
import { useState } from "react";
import * as MainApi from "../../utils/MainApi";
import "./MoviesCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const MoviesCard = ({ movie }) => {
  const { pathname } = useLocation();
  const isSavedMoviesPage = pathname === "/saved-movies";
  const [isSaved, setIsSaved] = useState(false);
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log(savedMovies);
    // Проверить установлен лайк или нет
    if (savedMovies.length !== 0) {
      const savedMovie = savedMovies.some((item) => {
        return item.movieId === movie.id || item.movieId === movie.movieId;
      });
      setIsSaved(savedMovie);
    }
  }, []);
  const handleSaveMovie = async () => {
    setIsLoading(true);
    try {
      const likedMovie = await MainApi.createMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${endpoint}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${endpoint}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
      setSavedMovies((state) => [...state, likedMovie]);
      setIsSaved(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleDeleteSavedMovie = async () => {
    const savedItem = savedMovies.find(
      (movieItem) =>
        movieItem.movieId === movie.id || movieItem.movieId === movie.movieId
    );
    try {
      const deletedMovie = await MainApi.deleteMovie(savedItem._id);
      if (deletedMovie) {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== deletedMovie._id)
        );
        setIsSaved(false);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <article className="movies-card">
      <a className="movies-card__link" href={movie.trailerLink}>
        <img
          src={imageUrlCheck(movie.image)}
          alt={movie.nameRU}
          className="movies-card__thumb"
        />
      </a>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <span className="movies-card__duration">
          {formatDuration(movie.duration)}
        </span>
        <button
          className="movies-card__like"
          onClick={!isSaved ? handleSaveMovie : handleDeleteSavedMovie}
        >
          <LikeIcon isSaved={isSaved} isSavedMoviesPage={isSavedMoviesPage} />
        </button>
      </div>
    </article>
  );
};

export default MoviesCard;
