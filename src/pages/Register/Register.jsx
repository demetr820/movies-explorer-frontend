import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import logo from "../../images/logo.svg";
import { inputs } from "../../utils/data/inputs";
import "./Register.css";

const Register = ({ handleRegister }) => {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="register__logo">
          <img src={logo} alt="логотип" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <Form handleFormSubmit={handleRegister} textSubmit="Зарегистрироваться">
          {inputs.register}
        </Form>
        <span className="register__login">
          Уже зарегистрированы?{" "}
          <Link className="register__link link-reset" to="/movies">
            Войти
          </Link>
        </span>
      </div>
    </section>
  );
};
export default Register;
