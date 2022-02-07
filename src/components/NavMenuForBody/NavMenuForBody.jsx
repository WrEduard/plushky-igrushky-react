import React from "react";
import "./navMenuForBody.scss";
import all from "../../assets/image/icon/all.png";
import bear from "../../assets/image/icon/bear.svg";
import rabbit from "../../assets/image/icon/rabbit.svg";
import rat from "../../assets/image/icon/rat.svg";
import unicorn from "../../assets/image/icon/unicorn.svg";
import dog from "../../assets/image/icon/dog.svg";
import { NavMenuForBodyItem } from "../../components";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/actions/filters";

const icons = {
  ALL: all,
  BEAR: bear,
  RABBIT: rabbit,
  RAT: rat,
  UNICORN: unicorn,
  DOG: dog,
};

const categories = [
  "Усі іграшки",
  "Ведмедики",
  "Зайчики",
  "Мишки",
  "Єдиноріжки",
  "Собачки",
];

const changeCategorie = (categorie) => {
  switch (categorie) {
    case "Усі іграшки":
      return "ALL";
    case "Ведмедики":
      return "BEAR";
    case "Зайчики":
      return "RABBIT";
    case "Мишки":
      return "RAT";
    case "Єдиноріжки":
      return "UNICORN";
    case "Собачки":
      return "DOG";
  }
};

function NavMenuForBody() {
  const dispatch = useDispatch();

  const onSelectCategory = (categorie) => {
    dispatch(setCategory(categorie));
  };

  return (
    <nav className="nav-menu">
      {categories.map((categorie, index) => {
        return (
          <NavMenuForBodyItem
            title={categorie}
            icon={icons[changeCategorie(categorie)]}
            dataFilter={changeCategorie(categorie)}
            onClickCategory={onSelectCategory}
            key={`${categorie}_${index}`}
          ></NavMenuForBodyItem>
        );
      })}
    </nav>
  );
}

export default NavMenuForBody;
