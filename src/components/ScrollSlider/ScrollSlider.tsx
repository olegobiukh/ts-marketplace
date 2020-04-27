import "./index.scss";

import React from "react";
import Item from "./Item";

function ScrollSlider({ text = "sdf", type = "default" }) {
  console.log(text);
  return (
    <section className={`scroll-slider`}>
      <div className={`scroll-slider__wrapper`}>
        <h2 className={`scroll-slider__title`}>Show weekly deels</h2>
        <div className={`scroll-slider__container`}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </section>
  );
}

export default ScrollSlider;
