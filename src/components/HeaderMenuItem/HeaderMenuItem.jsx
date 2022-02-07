import React from "react";
import { NavLink } from "react-router-dom";
import "./headerMenuItem.scss";

function HeaderMenuItem({ listHeaderLink }) {
  function setIdForMenuItem(name) {
    switch (name) {
      case "Про мене":
        return "forMe";
      case "Доставка і оплата":
        return "delivery";
      case "Контакти":
        return "contacts";
    }
  }

  function setLinkForMenuItem(name) {
    switch (name) {
      case "Про мене":
        return "forme";
      case "Доставка і оплата":
        return "delivery";
      case "Контакти":
        return "contacts";
    }
  }

  return (
    <ul className="header__menu-list">
      {listHeaderLink.map((title, index) => {
        return (
          <li
            className="header__menu-item"
            key={index + "in"}
            data-id={setIdForMenuItem(title)}
          >
            <NavLink to={setLinkForMenuItem(title)}>{title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderMenuItem;
