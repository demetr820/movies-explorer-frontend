import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__item">
            <label className="profile__label">Имя</label>
            <input className="profile__input" />
          </div>
          <div className="profile__limiter"></div>
          <div className="profile__item">
            <label className="profile__label">E-mail</label>
            <input className="profile__input" />
          </div>
          <button className="profile__submit">Редактировать</button>
        </form>
        <Link className="profile__logout link-reset" relative to="../signin">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
};

export default Profile;
