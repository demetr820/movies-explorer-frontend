import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import { useValidation } from "../../hooks/useValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";

const Profile = () => {
  const { isLoading } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useValidation({});
  return (
    <>
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__items-group">
            <label className="profile__label">Имя</label>
            <input
              className={`profile__input ${
                errors.name ? "profile__input_error" : ""
              }`}
              name="name"
              type="text"
              id="name"
              minLength="2"
              value={values.name || ""}
              onChange={handleChange}
              placeholder="Имя"
              required
            />
            <span className="profile__error">{errors.name}</span>
          </div>
          <div className="profile__limiter"></div>
          <div className="profile__items-group">
            <label className="profile__label">E-mail</label>
            <input
              className={`profile__input ${
                errors.email ? "profile__input_error" : ""
              }`}
              name="email"
              type="email"
              id="email"
              placeholder="E-mail"
              value={values.email || ""}
              onChange={handleChange}
              required
            />
            <span className="profile__error">{errors.email}</span>
          </div>
          <button
            className={`profile__submit ${
              isValid ? "" : " profile__submit_disabled"
            }`}
            disabled={!isValid}
          >
            {isLoading ? <Preloader /> : "Редактировать"}
          </button>
        </form>
        <Link className="profile__logout link-reset" relative to="../signin">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
};

export default Profile;
