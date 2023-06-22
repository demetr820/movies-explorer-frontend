import React from "react";
import "./NavTab.css";

const NavTab = () => {
  return (
    <div className="nav-tab">
      <div className="nav-tab__title">Портфолио</div>
      <div className="nav-tab__item">
        <span className="nav-tab__text">Статичный сайт</span>
        <a className="nav-tab__link"></a>
      </div>
      <div className="nav-tab__limiter"></div>
      <div className="nav-tab__item">
        <span className="nav-tab__text">Адаптивный сайт</span>
        <a className="nav-tab__link"></a>
      </div>
      <div className="nav-tab__limiter"></div>
      <div className="nav-tab__item">
        <span className="nav-tab__text">Одностраничное приложение</span>
        <a className="nav-tab__link"></a>
      </div>
    </div>
  );
};
export default NavTab;
