import React from "react";
import Slider from "react-slick";
import "./slick.scss";
import "./slider.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
};

function SimpleSlider({ arrImg }) {
  return (
    <section className="slider-wrapper">
      <Slider {...settings} className="slider">
        {arrImg.map((img, index) => {
          return (
            <div className="slider__item" key={index + "_key"}>
              <img src={img} alt="" className="slider__img"></img>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default SimpleSlider;
