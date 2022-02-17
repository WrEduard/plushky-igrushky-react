import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./logIn.scss";

function LogIn() {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const refLoginInput = useRef();
  const refPassordInput = useRef();

  const handleChangeLogin = () => {
    setLogin(refLoginInput.current.value);
    console.log(login);
  };

  const handleChangePassword = () => {
    setPassword(refPassordInput.current.value);
    console.log(password);
  };

  return (
    <div className="account-wrapper">
      <div className="account">
        <div className="account__login-form">
          <form action="/loginuser" id="login-form" method="post">
            <input
              type="text"
              name="email"
              id="login-form__login"
              placeholder="Логін/e-mail"
              ref={refLoginInput}
              onBlur={handleChangeLogin}
            ></input>

            <input
              type="password"
              name="password"
              id="login-form__password"
              placeholder="Пароль"
              ref={refPassordInput}
              onBlur={handleChangePassword}
            ></input>

            <button type="submit" id="login">
              Ввійти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
