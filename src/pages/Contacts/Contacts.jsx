import React from "react";
import "./contacts.scss";

import facebookIcon from "../../assets/image/icon/Facebook_icon-1.svg";
import instagramIcon from "../../assets/image/icon/instagram_icon-2.svg";
import whatsapp from "../../assets/image/icon/whatsapp.svg";
import telegram from "../../assets/image/icon/telegram.svg";

function Contacts() {
  return (
    <div className="contacts-wrapper">
      <div className="contacts">
        <div className="tel">
          Подзвоніть мені: <a href="tel:+380987351140">+38 (098) 735-11-40</a>
        </div>
        <div className="email">
          Напишіть мені:{" "}
          <a href="mailto:ulenka298@gmail.com">ulenka298@gmail.com</a>
        </div>
        <div className="social">
          Я в соціальних мережах <br></br>
          <a
            href="https://www.facebook.com/Plushky_igrushky-480504469199076"
            className="social-link-facebook"
            target="_blank"
          >
            <img src={facebookIcon} alt="facebook"></img>
          </a>
          <a
            href="https://www.instagram.com/plushky_igrushky/"
            className="social-link-instagram"
            target="_blank"
          >
            <img src={instagramIcon} alt="instagram"></img>
          </a>
        </div>
        <div className="messenger">
          Напишіть мені в месенджер <br></br>
          <a href="https://t.me/ulenkavr" target="_blank">
            <img src={telegram} alt=""></img>
          </a>
          <a
            className="whats-but"
            href="https://api.whatsapp.com/send?phone=+380987351140"
            target="_blank"
          >
            <img src={whatsapp} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
