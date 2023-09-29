import React from "react";
import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-3);
  };
  return (
    <div className="not-found">
      <div className="not-found__body">
        <span className="not-found__status">404</span>
        <span className="not-found__text">Страница не найдена</span>
        <Link onClick={goBack} className="not-found__link">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
