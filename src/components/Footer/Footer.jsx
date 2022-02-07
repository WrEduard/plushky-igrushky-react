import React from "react";
import "./footer.scss";
import facebookIcon from "../../assets/image/icon/Facebook_icon-1.svg";
import instagramIcon from "../../assets/image/icon/instagram_icon-2.svg";
import telegramSVG from "../../assets/image/icon/telegram.svg";
import whatsappSVG from "../../assets/image/icon/whatsapp.svg";
import { NavLink } from "react-router-dom";
import { Logo } from "../../components";

function Footer() {
  return (
    <footer className="footer">
      <Logo></Logo>

      <nav className="footer__menu">
        <ul className="footer__menu-list">
          <li className="footer__menu-list-item footer__for-me">
            <NavLink to="/forme">Про мене</NavLink>
          </li>
          <li className="footer__menu-list-item">
            <div className="footer__social">
              <span>Я в соціальних мережах</span>
              <a
                href="https://www.facebook.com/Plushky_igrushky-480504469199076"
                className="social-link-facebook"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebookIcon} alt="facebook"></img>
              </a>
              <a
                href="https://www.instagram.com/plushky_igrushky/"
                className="social-link-instagram"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramIcon} alt="instagram"></img>
              </a>
              <div className="footer__messenger">
                <span>Месенджери</span>
                <a
                  href="https://t.me/ulenkavr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegramSVG} alt=""></img>
                </a>
                <a
                  className="whats-but"
                  href="https://api.whatsapp.com/send?phone=+380987351140"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsappSVG} alt=""></img>
                </a>
              </div>
            </div>
          </li>
          <li className="footer__menu-list-item">
            <ul className="footer__contacts">
              <li>
                <span>Напишіть мені:</span>{" "}
                <a href="mailto:ulenka298@gmail.com">ulenka298@gmail.com</a>
              </li>
              <li>
                <span>Подзвоніть мені:</span>
                <a href="tel:+380987351140">+38 (098) 735-11-40</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
