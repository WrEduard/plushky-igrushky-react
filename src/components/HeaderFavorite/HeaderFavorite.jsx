import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import favoriteIcon from "../../assets/image/icon/heart-like2.svg";
import "./headerFavorite.scss";

function HeaderFavorite() {
  const { totalCount } = useSelector(({ favorite }) => favorite);

  return (
    <div className="header__favorite favorite">
      <NavLink to="/favorite" className="favorite__icon-link">
        <img
          src={favoriteIcon}
          className="favorite__icon-img"
          alt="avatar"
        ></img>
        {totalCount ? <span>{totalCount}</span> : ""}
      </NavLink>
    </div>
  );
}

export default HeaderFavorite;
