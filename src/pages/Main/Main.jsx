import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  CardProduct,
  LoadingToys,
  MoreButton,
  NavMenuForBody,
  SimpleSlider,
} from "../../components";
import { fetchToys } from "../../redux/actions/toys";
import { addToyToCart } from "../../redux/actions/cart";
import {
  addToyToFavorite,
  removeToyFavorite,
} from "../../redux/actions/favorite";

import "./main.scss";

function getImgMainSlider() {
  const url = "/imgMainSlider";
  const arrImg = [];
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      for (let img in result) {
        arrImg.push(result[img]);
      }
    });
  return arrImg;
}

const arrImgMainSlider = getImgMainSlider();

function Main() {
  const { items, isLoaded } = useSelector(({ toys }) => toys);
  const { category } = useSelector(({ filter }) => filter);
  const { itemsFavorite } = useSelector(({ favorite }) => favorite);

  const dispatch = useDispatch();

  window.sessionStorage.setItem("toys", JSON.stringify(items));

  const handleAddToyToCart = (objToy) => {
    dispatch(addToyToCart(objToy));
  };

  const handleAddRemoveFavorite = (objToy) => {
    Object.keys(itemsFavorite).includes(String(objToy.id))
      ? dispatch(removeToyFavorite(objToy.id))
      : dispatch(addToyToFavorite(objToy));
  };

  React.useEffect(() => {
    dispatch(fetchToys(category));
  }, [category, dispatch]);

  return (
    <main className="main">
      <SimpleSlider arrImg={arrImgMainSlider}></SimpleSlider>

      <NavMenuForBody></NavMenuForBody>

      <section className="cards-wrapper">
        {isLoaded
          ? items.map((toy) => (
              <CardProduct
                toy={toy}
                key={toy.id}
                onClickAddToyToCart={handleAddToyToCart}
                onClickAddRemoveFavorite={handleAddRemoveFavorite}
              />
            ))
          : Array(10)
              .fill(0)
              .map((item, index) => <LoadingToys key={index + "item"} />)}
      </section>

      <MoreButton></MoreButton>
    </main>
  );
}

export default Main;
