import React, { useState, useContext, useEffect } from "react";
import Preloader from "../../components/Preloader/Preloader";
import { useValidation } from "../../hooks/useValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";

const Profile = ({ handleLogout, handleEditProfile }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { isLoading, currentUser } = useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid } = useValidation(
    {}
  );

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);
  useEffect(() => {
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  }, [values.name, values.email, currentUser]);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile({ name: values.name, email: values.email });
  };
  return (
    <>
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
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
              pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
              required
            />
            <span className="profile__error">{errors.email}</span>
          </div>
          <button
            className={`profile__submit ${
              isValid && isEdit ? "" : " profile__submit_disabled"
            }`}
            disabled={!isValid || !isEdit || isLoading}
          >
            {isLoading ? <Preloader /> : "Редактировать"}
          </button>
        </form>
        <a onClick={handleLogout} className="profile__logout link-reset">
          Выйти из аккаунта
        </a>
      </section>
    </>
  );
};

export default Profile;
