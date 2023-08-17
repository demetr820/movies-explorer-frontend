import React, { useEffect } from "react";
import Main from "../../pages/Main/Main";
import { useState, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../../pages/Movies/Movies";
import SavedMovies from "../../pages/SavedMovies/SavedMovies";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import NotFound from "../../pages/NotFound/NotFound";
import Layout from "../Layout/Layout";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // Movies state
  const [movies, setMovies] = useState([]);

  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleTokenCheck();
  }, [isLoggedIn, handleTokenCheck]);

  // GET USER INFO MOVIES AND SAVED MOVIES
  useEffect(() => {
    handleGetUserInfo();
    handleGetMovies();
    handleGetSavedMovies();
  }, [isLoggedIn]);

  const handleRegister = (email, password) => {
    setIsLoading(true);
    MainApi.register(email, password)
      .then(res => {
        setCurrentUser({
          name: res.name,
          email: res.email
        });
        setIsLoading(false);
        navigate("/signin");
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const handleLogin = (email, password) => {
    setIsLoading(true);
    MainApi.login(email, password)
      .then(res => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        setIsLoading(false);
        navigate("/movies");
        return res;
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const handleTokenCheck = useCallback(async () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.checkToken()
        .then(res => {
          if (res) {
            setIsLoggedIn(true);
            navigate("/movies");
          }
        })
        .catch(err => console.log(err));
    }
  }, []);
  const handleGetUserInfo = async () => {
    try {
      const user = await MainApi.getUserInfo();
      setCurrentUser(user);
    } catch (err) {
      console.log(err);
    }
  };
  const handleGetMovies = async () => {
    try {
      if (!localStorage.getItem("movies")) {
        const fetchMovies = await MoviesApi.getMovies();
        localStorage.setItem("movies", JSON.stringify(fetchMovies));
        setMovies(fetchMovies);
      }
      const storageMovies = JSON.parse(localStorage.getItem("movies"));
      setMovies(() => [...storageMovies]);
    } catch (err) {
      console.log(err);
    }
  };
  const handleGetSavedMovies = async () => {
    try {
      const fetchMovies = await MainApi.getMovies();
      if (fetchMovies) {
        setSavedMovies(fetchMovies.data);
        localStorage.setItem("savedMovies", fetchMovies.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        isSideMenuOpen,
        setIsSideMenuOpen,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        savedMovies,
        setSavedMovies,
        movies
      }}
    >
      <div className="app container">
        <Routes>
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route
              path="movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies movies={movies} setMovies={setMovies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="saved-movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies savedMovies={savedMovies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
