import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import React from "react";
import Burger from "../Burger/Burger";
import Navigation from "../Navigation/Navigation";
import UserBlock from "../UserBlock/UserBlock";
import SideMenu from "../SideMenu/SideMenu";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "./Header.css";

function Header(props) {
  const { pathname } = useLocation();

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
      <Navigation />
      {!isSizeMD && <UserBlock />}
      {isSizeMD && (
        <>
          <Burger />
          <SideMenu />
        </>
      )}
    </header>
  );
}
export default Header;
