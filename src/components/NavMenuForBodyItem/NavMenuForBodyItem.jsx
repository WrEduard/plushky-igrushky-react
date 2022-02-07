"use string";
import React, { useState } from "react";
import "./navMenuForBodyItem.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";

function NavMenuForBodyItem({ title, icon, dataFilter, onClickCategory }) {
  const itemCategoryRef = React.useRef();
  const { category } = useSelector(({ filter }) => filter);

  const toggleCategorie = (event) => {
    const dataFilter = itemCategoryRef.current.getAttribute("data-filter");
    if (event.nativeEvent.path.includes(itemCategoryRef.current)) {
      onClickCategory(dataFilter);
    }
  };

  return (
    <div
      ref={itemCategoryRef}
      className={classNames("nav-menu__item", {
        active: category === dataFilter ? "active" : "",
      })}
      data-filter={dataFilter}
      onClick={toggleCategorie}
    >
      <div className="nav-menu__img">
        <img src={icon} alt={title}></img>
      </div>
      <div className="nav-menu__title">{title}</div>
    </div>
  );
}

export default NavMenuForBodyItem;
