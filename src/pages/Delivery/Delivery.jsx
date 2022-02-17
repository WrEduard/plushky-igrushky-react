import React from "react";
import "./delivery.scss";

function Delivery() {
  return (
    <div className="delivery-wrapper">
      <div className="delivery">
        <h2>Доставка товару можлива наступними способами:</h2>
        <ul>
          <li>Нова пошта</li>
          <li>Укрпошта</li>
          <li>При особистій зустрічі в м.Дунаївці</li>
        </ul>
        <h2>Якими способами можна оплатити товар?</h2>
        <ul>
          <li>На карту Монобанку або ПриватБанку</li>
          <li>Наложеним платежем при отримані на новій пошті</li>
          <li>Готівкою при особистій зустрічі в м.Дунаївці</li>
        </ul>
      </div>
    </div>
  );
}

export default Delivery;
