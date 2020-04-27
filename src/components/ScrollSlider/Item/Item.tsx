import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Item({ text = "sdf", type = "default" }) {
  console.log(text);
  const image =
    "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/9/2019/04/H4_1000x1000_vapour-999x999-300x360.png";
  return (
    <article className={`scroll-slider__item`}>
      <div className="scroll-slider__top">
        <h3 className="scroll-slider__item-title">Accessories</h3>
        <a href="#" className="scroll-slider__link">
          View all details <IoIosArrowRoundForward />
        </a>
      </div>
      <div className="scroll-slider__bottom">
        <p className={`scroll-slider__name`}>White solo 5 wireless</p>
        <p className={`scroll-slider__pricing`}>
          <strong className="scroll-slider__sale">$100</strong>
          <s className="scroll-slider__price">$129</s>
        </p>
      </div>
      <img src={image} alt="dsaf" className={`scroll-slider__image`} />
    </article>
  );
}

export default Item;
