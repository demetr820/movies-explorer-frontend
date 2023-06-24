import React from "react";
import "./NavTab.css";

const NavTab = () => {
  return (
    <div className="nav-tab">
      <div className="nav-tab__title">Портфолио</div>
      <a
        className="nav-tab__item link-reset"
        target="_blank"
        href="https://demetr820.github.io/russian-travel/"
      >
        <span className="nav-tab__text">Статичный сайт</span>
        <span className="nav-tab__link"></span>
      </a>
      <div className="nav-tab__limiter"></div>
      <a
        className="nav-tab__item link-reset"
        target="_blank"
        href="https://demetr820.github.io/how-to-learn/"
      >
        <span className="nav-tab__text">Адаптивный сайт</span>
        <span className="nav-tab__link"></span>
      </a>
      <div className="nav-tab__limiter"></div>
      <a
        className="nav-tab__item link-reset"
        target="_blank"
        href="https://mestoproject.nomoredomains.work/"
      >
        <span className="nav-tab__text">Одностраничное приложение</span>
        <span className="nav-tab__link"></span>
      </a>
    </div>
  );
};
export default NavTab;
