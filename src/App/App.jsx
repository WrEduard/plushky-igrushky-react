import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "../components";

import {
  Main,
  AdminPages,
  Cart,
  ForMe,
  Contacts,
  Favorite,
  ThankForOrder,
  Delivery,
  Product,
  LogIn,
} from "../pages";

import "./app-style.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/forme" element={<ForMe />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/thanks" element={<ThankForOrder />}></Route>
        <Route path="/admin" element={<AdminPages />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
