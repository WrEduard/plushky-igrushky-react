import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo/1.png";
import "./logo.scss";

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={logo} className="logo__img" alt="Logo"></img>
      </NavLink>
    </div>
  );
}

export default Logo;
