import React from "react";
import "./close.scss";
import closeSVG from "../../assets/image/icon/close.svg";

function Close({ onClickRemove, idToy }) {
  const removeFavorite = () => {
    onClickRemove(idToy);
  };
  return (
    <div className="close">
      <img src={closeSVG} alt="" onClick={removeFavorite}></img>
    </div>
  );
}

export default Close;
