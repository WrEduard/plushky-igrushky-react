import React from "react";
import "./headerAccount.scss";
import accountIcon from "../../assets/image/icon/account_avatar.svg";
import { NavLink } from "react-router-dom";

function HeaderAccount() {
  return (
    <div className="header__account account">
      <NavLink to="/admin">
        <img src={accountIcon} className="account__icon-img" alt="avatar"></img>
      </NavLink>
    </div>
  );
}

export default HeaderAccount;
