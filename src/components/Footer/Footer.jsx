import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="footer__top">
        <span className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </span>
      </div>
      <div className="footer__bottom">
        <span className="footer__copyright">© {date.getFullYear()}</span>
        <div className="footer__links">
          <a className="footer__link" href="#">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="#">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
