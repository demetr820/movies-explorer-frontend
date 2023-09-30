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
  // Popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // GET USER INFO MOVIES AND SAVED MOVIES
  useEffect(() => {
    handleTokenCheck();
  }, []);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchUser = await MainApi.getUserInfo();
        const fetchMovies = await MoviesApi.getMovies();
        const fetchSavedMovies = await MainApi.getMovies();
        localStorage.setItem("movies", JSON.stringify(fetchMovies));
        localStorage.setItem("saved-movies", JSON.stringify(fetchSavedMovies));
        setCurrentUser(fetchUser);
        setMovies(fetchMovies);
        setSavedMovies(fetchSavedMovies.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (isLoggedIn) fetchMovies();
  }, [isLoggedIn]);
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
        MainApi.login(email, password)
          .then((res) => {
            localStorage.setItem("jwt", res.token);
            setIsLoggedIn(true);
            setPopupMessage("Вы зарегистрированы");
            setIsPopupOpen(true);
            navigate("/movies");
          })
          .catch(async (err) => {
            const { message } = await err.json();
            setIsLoading(false);
            setPopupMessage(message);
            setIsPopupOpen(true);
          });
      })
      .catch(async (err) => {
        const { message } = await err.json();
        setIsLoading(false);
        setPopupMessage(message);
        setIsPopupOpen(true);
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
        setPopupMessage("Вы залогинились");
        setIsPopupOpen(true);
        navigate("/movies");
      })
      .catch(async (err) => {
        const { message } = await err.json();
        setIsLoading(false);
        setPopupMessage(message);
        setIsPopupOpen(true);
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
    if (localStorage.getItem("jwt")) {
      MainApi.checkToken()
        .then(() => {
          setIsLoggedIn(true);
          navigate(pathname);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleEditProfile = (formData) => {
    setIsLoading(true);
    MainApi.setUserInfo(formData)
      .then((res) => {
        setCurrentUser(res);
        setIsLoading(false);
      })
      .catch(async (err) => {
        const { message } = await err.json();
        setIsLoading(false);
        setPopupMessage(message);
        setIsPopupOpen(true);
      });
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
        <Popup
          isOpen={isPopupOpen}
          onClose={setIsPopupOpen}
          message={popupMessage}
        />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies movies={movies} savedMovies={savedMovies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies savedMovies={savedMovies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
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
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
