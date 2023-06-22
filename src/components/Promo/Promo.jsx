import React from "react";
import { Link } from "react-scroll";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__hero">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <div className="promo__links">
          <Link to="about-project" className="promo__link" smooth={true}>
            О проекте
          </Link>
          <Link to="techs" className="promo__link" smooth={true}>
            Технологии
          </Link>
          <Link to="aboute-me" className="promo__link" smooth={true}>
            Студент
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Promo;
