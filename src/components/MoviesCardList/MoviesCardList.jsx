import React, { useEffect, useState } from "react";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { useCurrentWidth } from "../../hooks/useCurrentWidth";
import "./MoviesCardList.css";

const MoviesCardList = ({ movies, isNoResult }) => {
  const [moviesPerPage, setMoviesPerPage] = useState(7);
  const [isLoadMoreButtonVisible, setIsLoadMoreButtonVisible] = useState(true);
  const width = useCurrentWidth();
  let page = 7;
  const showMoreMovies = () => {
    setMoviesPerPage(prev => prev + moviesPerPage);
  };
  useEffect(() => {}, []);
  useEffect(() => {
    if (width < 650) {
      setMoviesPerPage(3);
    }
  }, [width]);
  useEffect(() => {
    if (movies.length > moviesPerPage) {
      setIsLoadMoreButtonVisible(true);
    } else {
      setIsLoadMoreButtonVisible(false);
    }
  }, []);
  return (
    <>
      <ul className="card-list list-reset">
        {isNoResult ? (
          <h1>Ничего не найдено!</h1>
        ) : (
          movies.slice(0, 7).map(item => {
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
