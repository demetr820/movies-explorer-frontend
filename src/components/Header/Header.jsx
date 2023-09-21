import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import React, { useContext } from "react";
import Burger from "../Burger/Burger";
import Navigation from "../Navigation/Navigation";
import UserBlock from "../UserBlock/UserBlock";
import SideMenu from "../SideMenu/SideMenu";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "./Header.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = (props) => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useContext(CurrentUserContext);
  const isSizeMD = useMediaQuery("(max-width: 768px)");
  return (
    <header className="header">
      {pathname === "/" ? (
        <Logo />
      ) : (
        <Link to="/" className="logo link-reset">
          <Logo />
        </Link>
      )}
      {isLoggedIn && <Navigation />}
      {!isSizeMD && <UserBlock />}
      {isSizeMD && (
        <>
          <Burger />
          <SideMenu />
        </>
      )}
    </header>
  );
};
export default Header;
