import React from "react";
import "./logIn.scss";

function LogIn() {
  return (
    <div className="account-wrapper">
      <div className="account">
        <div className="account__logOrReg">
          <div className="account__login">
            <a href="#">Ввійти</a>
          </div>
          <div className="account__register">
            <a href="#">Зареєструватися</a>
          </div>
        </div>

        <div className="account__login-form">
          <form action="/loginuser" id="login-form" method="post">
            <input
              type="text"
              name="email"
              id="login-form__login"
              placeholder="Логін/e-mail"
            ></input>
            <input
              type="password"
              name="password"
              id="login-form__password"
              placeholder="Пароль"
            ></input>
            <button type="submit" id="login">
              Ввійти
            </button>
          </form>
        </div>

        <div className="account__register-form">
          <form action="/newuser" id="register-form" method="post">
            <input
              type="text"
              name="firstName"
              id="register-form__name"
              placeholder="Ваше імя"
            ></input>
            <input
              type="text"
              name="email"
              id="register-form__login"
              placeholder="E-mail"
            ></input>
            <input
              type="password"
              name="password"
              id="register-form__password"
              placeholder="Пароль"
            ></input>
            <input
              type="password"
              id="register-form__password-repeat"
              placeholder="Повторіть пароль"
            ></input>
            <button type="submit" id="register-form-submit" disabled>
              Зареєструватися
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
