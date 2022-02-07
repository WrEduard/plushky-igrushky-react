import React from "react";
import { ButtonBuy, SimpleSlider } from "../../components";
import { useDispatch } from "react-redux";
import { addToyToCart } from "../../redux/actions/cart";

import "./product.scss";

function Product() {
  const dispatch = useDispatch();

  const getIdPage = (urlStr) => {
    return Number(urlStr.split("/").pop());
  };

  const getProductFromSessionStorage = () => {
    const idPage = getIdPage(document.location.pathname);
    const items = JSON.parse(window.sessionStorage.getItem("toys"));
    const product = items.filter((item) => {
      return item.id === +idPage;
    });
    return product[0];
  };

  const product = getProductFromSessionStorage();

  const { id, title, type, description, height, images, mainImage } = product;
  const img = mainImage.mainImage ? mainImage.source : "Image";
  const price = product.price.priceWithDiscount
    ? product.price.priceWithDiscount
    : product.price.initialPrice;

  const handleAddToyToCart = () => {
    const objToy = { id, title, img, price, type };
    console.log(objToy);
    dispatch(addToyToCart(objToy));
  };

  return (
    <div className="product-wrapper">
      <div className="product" data-prodid={id}>
        <div className="product__slider-wrapper">
          {images && images.length > 0 ? (
            <SimpleSlider arrImg={images}></SimpleSlider>
          ) : (
            "Немає зображень"
          )}
        </div>
        <div className="product__description-wrapper">
          <div className="product__description">
            <div className="product__title">{title}</div>
            <div className="product__text">{description}</div>
            <div className="product__text">{height} см</div>
            <div className="product__price">{price} грн.</div>
            {/* <button
              className="product__button hold"
              onClick={handleAddToyToCart}
            >
              Купити
            </button> */}
            <ButtonBuy
              className="product__button hold"
              onCklickToBuy={handleAddToyToCart}
              idToy={id}
            ></ButtonBuy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
