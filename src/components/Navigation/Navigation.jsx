import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const classes = "navigation__item link-reset";
  const className = ({ isActive }) =>
    isActive ? classes + " navigation__item_active" : classes;
  return (
    <nav className="navigation">
      <NavLink className={className} to="movies">
        Фильмы
      </NavLink>
      <NavLink className={className} to="saved-movies">
        Сохраннёные фильмы
      </NavLink>
    </nav>
  );
};

export default Navigation;
