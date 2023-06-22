import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import "./UserBlock.css";

const UserBlock = () => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return (
    <div className="user-block">
      {!isLoggedIn ? (
        <>
          <Link className="user-block__registration link-reset">
            Регистрация
          </Link>
          <Link className="user-block__login link-reset">Войти</Link>
        </>
      ) : (
        <Link className="user-block__account link-reset" to="/profile">
          Аккаунт
        </Link>
      )}
    </div>
  );
};

export default UserBlock;
