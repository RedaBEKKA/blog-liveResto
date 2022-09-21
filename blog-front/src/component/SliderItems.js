import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./item";
import slider from "./slider.json";

const SliderItems = () => {
  return (
    <Carousel
      sx={{
        marginBottom: "80px",
        padding: { xs: "0px 7px", sm: "0px 8px", md: "0" },
      }}
    >
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default SliderItems;
