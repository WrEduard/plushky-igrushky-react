import React from "react";
import "./header-style.scss";
import {
  HeaderMenuItem,
  HeaderFavorite,
  HeaderAccount,
  HeaderCart,
  Logo,
} from "../../components";

function Header() {
  const listHeaderLink = ["Про мене", "Доставка і оплата", "Контакти"];

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo></Logo>
        <div className="header__menu">
          <nav className="header__menu-body">
            <HeaderMenuItem listHeaderLink={listHeaderLink}></HeaderMenuItem>
          </nav>
        </div>

        <div className="header__user">
          <HeaderFavorite></HeaderFavorite>
          <HeaderAccount></HeaderAccount>
          <HeaderCart></HeaderCart>
        </div>
      </div>
    </header>
  );
}

export default Header;
