// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";

export default function SwiperSlider({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {images.map((image) => {
        return (
          <SwiperSlide>
            <div className="product__slider-item">
              <img src={image} alt="image" className="product__slider-img" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
