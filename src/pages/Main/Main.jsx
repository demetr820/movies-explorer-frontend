import React from "react";
import Promo from "../../components/Promo/Promo";
import AboutProject from "../../components/AboutProject/AboutProject";
import Techs from "../../components/Techs/Techs";
import AboutMe from "../../components/AboutMe/AboutMe";

const Main = () => {
  return (
    <div className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
};

export default Main;
