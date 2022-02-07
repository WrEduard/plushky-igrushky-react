import React from "react";
import { useSelector } from "react-redux";
import "./buttonBuy.scss";

export default function ButtonBuy({ onCklickToBuy, idToy }) {
  const { items } = useSelector(({ cart }) => ({
    items: cart.items,
  }));

  const totalCountToy = () => {
    const allToys = items[idToy];
    return allToys ? allToys.items.length : false;
  };

  const countToy = totalCountToy();

  return (
    <button className="product-card__button" onClick={onCklickToBuy}>
      Купити&nbsp;&nbsp; {countToy ? <span> {countToy}</span> : ""}
    </button>
  );
}
