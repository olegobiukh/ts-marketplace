import "./index.scss";

import React, { useState } from "react";
import uid from "uid";

function Slider() {
  const [activeImage, setImage] = useState(0);

  const images = [
    {
      id: 0,
      title: "image0",
      url:
        "https://elab.scdn8.secure.raxcdn.com/demo-4/wp-content/uploads/sites/6/2019/04/macbook-1-799x799.png",
    },
    {
      id: 1,
      title: "image0",
      url:
        "https://elab.scdn8.secure.raxcdn.com/demo-4/wp-content/uploads/sites/6/2019/04/mcbook-799x799.png",
    },
  ];

  const renderImages = images.map((item) => (
    <img
      key={uid()}
      className={`product-slider__image`}
      src={item.url}
      alt={item.title}
    />
  ));

  const renderSmallImages = images.map((item) => (
    <div
      className={`product-slider__toolbar-box ${
        activeImage === item.id && "product-slider__toolbar-box--active"
      }`}
      onClick={() => setImage(item.id)}
    >
      <img
        key={uid()}
        className={`product-slider__toolbar-image`}
        src={item.url}
        alt={item.title}
      />
    </div>
  ));

  return (
    <div className={`product-slider`}>
      <div className="product-slider__main-wrapper">
        <div
          className="product-slider__main"
          style={{ transform: `translateX(-${activeImage * 300}px)` }}
        >
          {renderImages}
        </div>
      </div>
      <div className="product-slider__toolbar">{renderSmallImages}</div>
    </div>
  );
}

export default Slider;
