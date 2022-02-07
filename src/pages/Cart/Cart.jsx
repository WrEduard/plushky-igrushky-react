import React from "react";
import "./cart.scss";
import { CartItem } from "../../components";
import { useSelector } from "react-redux";
import {
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from "../../redux/actions/cart";
import { useDispatch } from "react-redux";

function Cart() {
  const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();

  const addedToy = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const removeItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const onPlusCartItem = (id) => {
    dispatch(plusCartItem(id));
  };
  const onMinusCartItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const cartData = {};
  return (
    <div className="cart-wrapper">
      {totalCount > 0 ? (
        <div className="cart">
          <h1>Кошик</h1>
          <div className="cart__products-wrapper">
            <div className="cart__products-in-cart">
              {addedToy.map((obj) => {
                return (
                  <CartItem
                    key={obj.id}
                    name={obj.title}
                    price={obj.price}
                    id={obj.id}
                    img={obj.img}
                    type={obj.type}
                    totalPrice={items[obj.id].totalPrice}
                    totalCount={items[obj.id].items.length}
                    onRemoveItem={removeItem}
                    onPlusItem={onPlusCartItem}
                    onMinusItem={onMinusCartItem}
                  />
                );
              })}
            </div>

            <div className="cart__total">
              <div className="cart__total-info">Підсумок: </div>
              <div className="cart__total-count-products">
                іграшок: {totalCount}{" "}
              </div>
              <div className="cart__total-sum">на суму {totalPrice} грн.</div>
            </div>
          </div>

          <form action="#" className="cart-form">
            {/* <!-- Payment --> */}
            <div className="cart__pay-wrapper">
              <h2>Оберіть спосіб оплати</h2>
              <div className="cart__pay">
                <div className="pay__cash">
                  <label>
                    <input
                      type="radio"
                      name="pay-method"
                      value="Готівка"
                      id="cash"
                    ></input>
                    Оплата при отримані (наложеним платежем) (буде додаткова
                    комісія транспортної компанії за пересилання коштів)
                  </label>
                </div>
                <div className="pay__cashless">
                  <label>
                    <input
                      type="radio"
                      name="pay-method"
                      value="Передоплата"
                      id="cashless"
                      defaultChecked={true}
                    ></input>
                    Передоплата - безготівковий переказ
                  </label>
                </div>
              </div>
            </div>

            {/* <!-- Delivery --> */}
            <div className="cart__delivery-wrapper">
              <h2>Оберіть спосіб доставки</h2>
              <div className="cart__delivery">
                <div className="cart__ukrposhta">
                  <label>
                    <input
                      type="radio"
                      name="delivery-method"
                      value="ukrposhta"
                      id="ukrposhta"
                    ></input>
                    Укрпошта
                  </label>
                </div>
                <div className="cart__novaposhta">
                  <label>
                    <input
                      type="radio"
                      name="delivery-method"
                      value="novaposhta"
                      id="novaposhta"
                      defaultChecked={true}
                    ></input>
                    Нова пошта
                  </label>
                </div>
                <div className="cart__delivery-textarea">
                  <textarea
                    name="delivery-adress"
                    id="delivery-adress"
                    rows="5"
                    placeholder="Вкажіть адресу доставки (оласть, район, населений пункт, вулиця, будинок, номер телефону, ПІБ отримувача, № відділення НП)"
                  ></textarea>
                </div>
                <div className="cart__tel">
                  Введіть свій номер телефону:
                  <input
                    type="tel"
                    placeholder="+380987351140"
                    id="tel"
                  ></input>
                </div>
              </div>
            </div>

            {/* <!-- Order button --> */}
            <div className="cart__btn-wrapper">
              <button type="submit" className="cart__button">
                Замовити
              </button>
            </div>
          </form>
        </div>
      ) : (
        <h1>Кошик пустий</h1>
      )}
    </div>
  );
}

export default Cart;
