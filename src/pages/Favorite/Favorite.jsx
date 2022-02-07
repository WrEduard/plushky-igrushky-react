import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Close } from "../../components";
import { removeToyFavorite } from "../../redux/actions/favorite";
import "./favorite.scss";

function Favorite() {
  const dispatch = useDispatch();
  const { itemsFavorite } = useSelector(({ favorite }) => favorite);
  const arrItemsFavorite = Object.keys(itemsFavorite).map(
    (value) => itemsFavorite[value]
  );

  const removeFavorite = (id) => {
    dispatch(removeToyFavorite(id));
  };
  return (
    <div className="favorite-wrapper">
      <div className="favorite">
        {arrItemsFavorite.length > 0 ? (
          <div className="favorite__products-wrapper">
            <h1>Вибране</h1>
            <div className="favorite__products-in-favorite">
              {arrItemsFavorite.map((item) => {
                return (
                  <div className="favorite__product-item" key={item.id}>
                    <Close onClickRemove={removeFavorite} idToy={item.id} />
                    <Link to={`/product/${item.id}`}>
                      <div className="favorite__img-product">
                        <img src={item.img} alt={item.title}></img>
                        <h2>{item.title}</h2>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <h1>Вам нічого не сподобалося :(</h1>
        )}
      </div>
    </div>
  );
}

export default Favorite;
