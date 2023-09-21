import React, { useEffect } from "react";
import Main from "../../pages/Main/Main";
import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import Popup from "../Popup/Popup";

import Layout from "../Layout/Layout";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    handleTokenCheck();
  }, []);

  // GET USER INFO MOVIES AND SAVED MOVIES
  useEffect(() => {
    Promise.all([
      MainApi.getUserInfo(),
      MoviesApi.getMovies(),
      MainApi.getMovies(),
    ]).then(([me, movies, savedMovies]) => {
      console.log(savedMovies);
      localStorage.setItem("movies", JSON.stringify(movies));
      localStorage.setItem("saved-movies", JSON.stringify(savedMovies.data));
      setCurrentUser(me);
      setMovies(movies);
      setSavedMovies(savedMovies.data);
    });
  }, []);
  console.log(savedMovies);
  const handleRegister = (formData) => {
    const { name, email, password } = formData;
    setIsLoading(true);
    MainApi.register(name, email, password)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email,
        });
        setIsLoading(false);
        MainApi.login(formData)
          .then((res) => {
            localStorage.setItem("jwt", res.token);
            setIsLoggedIn(true);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const handleLogin = (formData) => {
    const { email, password } = formData;
    setIsLoading(true);
    MainApi.login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        setIsLoading(false);
        navigate("/movies");
        return res;
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    setIsLoading(false);
    navigate("/");
  };

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.checkToken()
        .then(() => {
          setIsLoggedIn(true);
          navigate(pathname);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleGetUserInfo = async () => {
    try {
      const user = await MainApi.getUserInfo();
      setCurrentUser(user);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEditProfile = (formData) => {
    setIsLoading(true);
    MainApi.setUserInfo(formData)
      .then((res) => {
        setCurrentUser(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const handleGetMovies = async () => {
    try {
      if (!localStorage.getItem("movies")) {
        const fetchMovies = await MoviesApi.getMovies();
        localStorage.setItem("movies", JSON.stringify(fetchMovies));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleGetSavedMovies = async () => {
    try {
      if (!localStorage.getItem("saved-movies")) {
        const fetchMovies = await MainApi.getMovies();
        localStorage.setItem("movies", JSON.stringify(fetchMovies));
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
        savedMovies,
        setSavedMovies,
        isLoading,
        setIsLoading,
      }}
    >
      <div className="app container">
        {/* <Popup /> */}
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
                  <Movies movies={movies} savedMovies={savedMovies} />
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
                  <Profile
                    handleEditProfile={handleEditProfile}
                    handleLogout={handleLogout}
                  />
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
