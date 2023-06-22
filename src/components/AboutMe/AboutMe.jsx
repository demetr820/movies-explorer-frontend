import React from "react";
import "./AboutMe.css";
import NavTab from "../NavTab/NavTab";
import user from "../../images/user.jpg";

function AboutMe() {
  return (
    <section id="aboute-me" className="about-me">
      <h2 className="section-title about-me__section-title">Студент</h2>
      <div className="about-me__profile">
        <div className="about-me__user">
          <div className="about-me__name">Виталий</div>
          <p className="about-me__about">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__resume">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <span className="about-me__repo">Github</span>
        </div>
        <img className="about-me__foto" src={user} alt="фото пользователя" />
      </div>
      <NavTab />
    </section>
  );
}
export default AboutMe;
