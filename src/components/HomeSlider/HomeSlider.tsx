import "./index.scss";

import React, { useState } from "react";
import CustomButton from "../CustomButton";

function HomeSlider() {
  const items = [
    {
      id: 1,
      title: "portable wireless speakers",
      text: "beats pill",
      price: 2370,
      image:
        "https://elab.stylemixthemes.com/demo-4/wp-content/uploads/sites/6/2019/03/slide_center.png",
    },
    {
      id: 2,
      title: "the power of imaging",
      text: "58 A-mount Camera",
      sale: 1370,
      price: 1540,
      image:
        "https://elab.stylemixthemes.com/demo-4/wp-content/uploads/sites/6/2019/03/photo.png",
    },
    {
      id: 3,
      title: "seeing is believing",
      text: "Acer Swift 3",
      sale: 870,
      price: 950,
      image:
        "https://elab.stylemixthemes.com/demo-4/wp-content/uploads/sites/6/2019/03/note.png",
    },
    {
      id: 4,
      title: "a step beyond just sound",
      text: "Edifier S2000Pro",
      sale: 540,
      price: 660,
      image:
        "https://elab.stylemixthemes.com/demo-4/wp-content/uploads/sites/6/2019/03/hifi.png",
    },
  ];

  const [current, setCurrentSlide] = useState(1);

  const points = items.map((item) => (
    <li
      key={item.id}
      className={`home-slider__point ${
        item.id !== current
          ? "home-slider__point--ball"
          : "home-slider__point--number"
      }`}
      onClick={() => setCurrentSlide(item.id)}
    >
      {item.id === current && item.id}
    </li>
  ));

  const currentSlider = items.find((item) => item.id === current);
  console.log(JSON.stringify(currentSlider));

  return (
    <div className={`home-slider`}>
      {currentSlider && (
        <>
          <div className={`home-slider__left`}>
            <p className={`home-slider__text`}>
              {currentSlider && currentSlider.text}
            </p>
            <h1 className={`home-slider__title`}>
              {currentSlider && currentSlider.title}
            </h1>
            <p className={`home-slider__pricing`}>
              <span className={`home-slider__sale`}>${currentSlider.sale ? currentSlider.sale : currentSlider.price}</span>
              {currentSlider.sale && (
                <span className={`home-slider__price`}>
                  <s>${currentSlider.price}</s>
                </span>
              )}
            </p>
            <div className={`home-slider__toolbar`}>
              <CustomButton text='shop now' type='volumed' />
              <CustomButton text='view all' type='default' />
            </div>
          </div>
          <img src={currentSlider.image} alt={currentSlider.text} className={`home-slider__image`} />
        </>
      )}
      <ul className={`home-slider__points`}>{points}</ul>
    </div>
  );
}

export default HomeSlider;
