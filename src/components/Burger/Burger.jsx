import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Burger.css";

const Burger = () => {
  const { isSideMenuOpen, setIsSideMenuOpen } = useContext(CurrentUserContext);

  const handleMenuToggle = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <button
      className={`burger ${isSideMenuOpen ? "burger_close" : ""}`}
      onClick={handleMenuToggle}
    >
      <span className="burger__line"></span>
    </button>
  );
};

export default Burger;
