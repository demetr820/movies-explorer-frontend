import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import logo from "../../images/logo.svg";
import { inputs } from "../../utils/data/inputs";
import "./Login.css";

const Login = ({ handleLogin }) => {
  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__logo">
          <img src={logo} alt="логотип" />
        </Link>
        <h2 className="login__title">Добро пожаловать!</h2>
        <Form handleFormSubmit={handleLogin} textSubmit="Войти">
          {inputs.login}
        </Form>
        <span className="login__login">
          Ещё не зарегистрированы?{" "}
          <Link className="login__link link-reset" relative to="../signup">
            Регистрация
          </Link>
        </span>
      </div>
    </section>
  );
};
export default Login;
