import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slider.css";
import slider from "./slider.json";
const SliderItems = () => {
  return (
    <div className="container_carsouel">
      <Carousel
        autoPlay
        interval={6000}
        thumbWidth={120}
        showIndicators={false}
        showStatus={false}
      >
        {slider.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} alt="" />
            <div className="overlay">
              <h2 className="overlay_title">{slide.title}</h2>
              <p className="overlay_text">{slide.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderItems;
