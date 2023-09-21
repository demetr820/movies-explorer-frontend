import React, { useEffect, useState } from "react";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
// import { useCurrentWidth } from "../../hooks/useCurrentWidth";
import {
  MOBILE_WINDOW_WIDTH,
  MOBILE_MOVIES_COUNT,
  DESKTOP_MOVIES_COUNT,
} from "../../utils/consts";
import "./MoviesCardList.css";

const MoviesCardList = ({ movies }) => {
  const [moviesAtTime, setMoviesAtTime] = useState(DESKTOP_MOVIES_COUNT);
  const [isLoadMoreButtonVisible, setIsLoadMoreButtonVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowWidth = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);
  useEffect(() => {
    if (windowWidth <= MOBILE_WINDOW_WIDTH) {
      setMoviesAtTime(MOBILE_MOVIES_COUNT);
    } else {
      setMoviesAtTime(DESKTOP_MOVIES_COUNT);
    }
  }, [windowWidth]);
  const showMoreMovies = () => {
    setMoviesAtTime((prev) => prev + moviesAtTime);
  };
  useEffect(() => {
    if (movies.length > moviesAtTime) {
      setIsLoadMoreButtonVisible(true);
    } else {
      setIsLoadMoreButtonVisible(false);
    }
  }, [movies.length, moviesAtTime]);

  return (
    <>
      <ul className="card-list list-reset">
        {movies.length === 0 ? (
          <span className="card-list__not-found">Ничего не найдено</span>
        ) : (
          movies.slice(0, moviesAtTime).map((item) => {
            return (
              <li key={item.id || item.movieId}>
                <MoviesCard movie={item} />
              </li>
            );
          })
        )}
      </ul>
      {isLoadMoreButtonVisible && (
        <button className="card-list__load-more" onClick={showMoreMovies}>
          Ещё
        </button>
      )}
    </>
  );
};

export default MoviesCardList;
