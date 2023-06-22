import React, { useEffect } from "react";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import SavedMovies from "../../pages/SavedMovies/SavedMovies";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import NotFound from "../../pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Layout from "../Layout/Layout";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://api.nomoreparties.co/beatfilm-movies/")
      ).json();
      setMovies(data);
    };
    dataFetch();
  }, []);
  return (
    <CurrentUserContext.Provider
      value={{ isSideMenuOpen, setIsSideMenuOpen, isLoggedIn, setIsLoggedIn }}
    >
      <div className="app container">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="movies" element={<Movies movies={movies} />} />
            <Route path="saved-movies" element={<SavedMovies />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
