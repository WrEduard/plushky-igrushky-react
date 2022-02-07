import React from "react";
import deleteSVG from "../../assets/image/icon/trashcan_delete.svg";
import plusSVG from "../../assets/image/icon/plus.svg";
import minusSVG from "../../assets/image/icon/minus.svg";
import "./cartItem.scss";

function CartItem({
  name,
  img,
  type,
  id,
  price,
  totalPrice,
  totalCount,
  onRemoveItem,
  onPlusItem,
  onMinusItem,
}) {
  const handleRemoveItem = () => {
    onRemoveItem(id);
  };
  const handlePlusItem = () => {
    onPlusItem(id);
  };
  const handleMinusItem = () => {
    onMinusItem(id);
  };

  return (
    <div className="cart__product-item" data-prodid={id}>
      <div className="cart__name-product">
        <div className="cart__img-product">
          <img src={img} alt={type}></img>
          <a href="#">{name}</a>
        </div>
      </div>
      <div className="cart__count-product">
        <img
          src={minusSVG}
          onClick={handleMinusItem}
          className="cart__plus-minus-button"
        />
        <span>{totalCount}</span>
        <img
          src={plusSVG}
          onClick={handlePlusItem}
          className="cart__plus-minus-button"
        />
      </div>
      <div className="cart__price-product">{price}</div>
      <div className="cart__sum-product">{totalPrice}</div>
      <div className="cart__delete-product">
        <img
          onClick={handleRemoveItem}
          src={deleteSVG}
          className="delete-product-button"
        ></img>
      </div>
    </div>
  );
}

export default CartItem;
