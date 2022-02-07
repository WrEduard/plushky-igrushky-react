import React from "react";
import "./adminPages.scss";

function AdminPages() {
  return (
    <div className="wrapper-admin-page">
      <h1>Адміністративна панель</h1>
      <main className="main">
        <form action="/addtoy" name="form-add-new-product" method="post">
          <div className="title-wrapper">
            <label for="title">Назва іграшки</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Назва іграшки"
            ></input>
          </div>

          <div className="height-wrapper">
            <label for="height">Ріст іграшки (см)</label>
            <input
              type="number"
              name="height"
              id="height"
              placeholder="Ріст іграшки (см)"
            ></input>
          </div>

          <div className="type-wrapper">
            <label for="typeProduct">Категорія іграшки</label>
            <select name="typeProduct" id="typeProduct">
              <option value="false">Категорія іграшки</option>
              <option value="BEAR">BEAR</option>
              <option value="UNICORN">UNICORN</option>
              <option value="RABBIT">RABBIT</option>
              <option value="RAT">RAT</option>
              <option value="DOG">DOG</option>
            </select>
          </div>

          <div className="priceWithoutDiscount-wrapper">
            <label for="priceWithoutDiscount">Ціна без знижки</label>
            <input
              type="number"
              name="priceWithoutDiscount"
              id="priceWithoutDiscount"
              placeholder="Ціна без знижки"
            ></input>
          </div>

          <div className="discount-wrapper">
            <label for="discountCheckbox">Знижка?</label>
            <input
              type="checkbox"
              id="discountCheckbox"
              name="discountCheckbox"
            ></input>
            <input
              type="number"
              id="discountInput"
              name="discountInput"
              placeholder="Розмір знижки (%)"
              disabled
            ></input>
          </div>

          <div className="label-new-wrapper">
            <label for="labelNew">Нова іграшка?</label>
            <input type="checkbox" id="labelNew" name="labelNew"></input>
          </div>

          <div className="main-image-wrapper">
            <label for="mainImage">Посилання на головне фото іграшки</label>
            <input
              type="text"
              name="mainImage"
              id="mainImage"
              placeholder="Головне фото іграшки"
            ></input>
          </div>

          <div className="description">
            <label for="description">Опис іграшки</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="3"
              placeholder="Опис іграшки"
            ></textarea>
          </div>

          <div className="images-wrapper">
            <div>
              <label for="image1">Посилання на фото іграшки 1</label>
              <input
                type="text"
                name="image1"
                id="image1"
                placeholder="Фото іграшки 1"
              ></input>
            </div>

            <div>
              <label for="image2">Посилання на фото іграшки 2</label>
              <input
                type="text"
                name="image2"
                id="image2"
                placeholder="Фото іграшки 2"
              ></input>
            </div>

            <div>
              <label for="image3">Посилання на фото іграшки 3</label>
              <input
                type="text"
                name="image3"
                id="image3"
                placeholder="Фото іграшки 3"
              ></input>
            </div>

            <div>
              <label for="image4">Посилання на фото іграшки 4</label>
              <input
                type="text"
                name="image4"
                id="image4"
                placeholder="Фото іграшки 4"
              ></input>
            </div>

            <div>
              <label for="image5">Посилання на фото іграшки 5</label>
              <input
                type="text"
                name="image5"
                id="image5"
                placeholder="Фото іграшки 5"
              ></input>
            </div>

            <div>
              <label for="image6">Посилання на фото іграшки 6</label>
              <input
                type="text"
                name="image6"
                id="image6"
                placeholder="Фото іграшки 6"
              ></input>
            </div>
          </div>

          <button type="reset">Очистити форму</button>
          <button type="submit" id="submit-product">
            Додати іграшку на сайт
          </button>
        </form>

        <button id="exit">Вихід</button>
      </main>
    </div>
  );
}
export default AdminPages;
