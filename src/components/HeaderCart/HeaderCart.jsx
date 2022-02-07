import React from "react";
import "./headerCart.scss";
import cartIcon from "../../assets/image/icon/bag_buy_cart.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderCart() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));

  return (
    <div className="header__cart cart">
      <NavLink to="/cart">
        <img src={cartIcon} className="cart__icon-img" alt="bag"></img>
        {totalCount ? <span>{totalCount}</span> : ""}
      </NavLink>
    </div>
  );
}

export default HeaderCart;
