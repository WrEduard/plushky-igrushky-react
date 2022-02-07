import React from "react";

import "./cardProduct.scss";

import heartLikeActive from "../../assets/image/icon/favorite-fiolet.svg";
import heartLike from "../../assets/image/icon/heart-like2.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonBuy from "../ButtonBuy";

function CardProduct({ toy, onClickAddToyToCart, onClickAddRemoveFavorite }) {
  const labels = toy.labels;
  const id = toy.id;
  const type = toy.type;
  const title = toy.title;
  const description = toy.description;
  const height = toy.height;
  const img = toy.mainImage.mainImage ? toy.mainImage.source : "Image";
  const discount = toy.price.discount;
  const priceWithDiscount = toy.price.priceWithDiscount;
  const initialPrice = toy.price.initialPrice;
  const price = priceWithDiscount ? priceWithDiscount : initialPrice;
  const { itemsFavorite } = useSelector(({ favorite }) => favorite);
  const productCard = React.useRef();

  const addToyToCart = () => {
    const objToy = { id, title, img, price, type };
    onClickAddToyToCart(objToy);
  };

  const addToyToFavorite = () => {
    const objToy = { id, title, img };
    onClickAddRemoveFavorite(objToy);
  };

  const isFavorite = (id) => {
    return Object.keys(itemsFavorite).includes(String(id));
  };

  return (
    <div
      ref={productCard}
      className="product-card"
      data-category={type}
      data-prodid={id}
    >
      <div className="product-card__favorite">
        <img
          src={isFavorite(id) ? heartLikeActive : heartLike}
          alt="Favorite"
          onClick={addToyToFavorite}
        ></img>
      </div>

      <div className="product-card__labels">
        {labels.map((label, index) => (
          <div
            key={index + "l"}
            className={
              label === "NEW"
                ? "product-card__label-new label"
                : "product-card__label-discount label"
            }
          >
            {label === "SALE" ? `-${discount}%` : label}
          </div>
        ))}
      </div>

      <Link to={`/product/${id}`}>
        <div className="product-card__img">
          <img src={img} alt={type}></img>
        </div>
      </Link>

      <div className="product-card__footer">
        <div className="product-card__title">{title}</div>
        <div className="product-card__subtitle description">{description}</div>
        <div className="product-card__subtitle height">{height} см</div>
        <div className="product-card__price">
          {priceWithDiscount ? (
            <div className="product-card__price-widh-discount">
              {priceWithDiscount} грн.
            </div>
          ) : (
            ""
          )}
          <div
            className={
              priceWithDiscount ? "product-card__price-without-discount" : ""
            }
          >
            {initialPrice} грн.
          </div>
        </div>
        <ButtonBuy onCklickToBuy={addToyToCart} idToy={id}></ButtonBuy>
      </div>
    </div>
  );
}

export default CardProduct;
