import React from "react";
import { Link } from "react-router-dom";
import UserBlock from "../UserBlock/UserBlock";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./SideMenu.css";

const SideMenu = () => {
  const { isSideMenuOpen } = useContext(CurrentUserContext);
  return (
    <div className={`side-menu ${isSideMenuOpen ? "side-menu_visible" : ""}`}>
      <div className="side-menu__inner">
        <nav className="side-menu__list">
          <Link
            className="side-menu__item side-menu__item_bold link-reset"
            to="/"
          >
            Главная
          </Link>
          <Link className="side-menu__item link-reset" relative to="../movies">
            Фильмы
          </Link>
          <Link
            className="side-menu__item link-reset"
            relative
            to="../saved-movies"
          >
            Сохраннёные фильмы
          </Link>
        </nav>
        <UserBlock />
      </div>
    </div>
  );
};

export default SideMenu;
