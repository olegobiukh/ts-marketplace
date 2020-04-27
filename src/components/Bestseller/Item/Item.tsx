import "./index.scss";

import React from "react";
import Timer from "./Timer/Item";

function Item({ text = "sdf", type = "default" }) {
  console.log(text);
  return (
    <>
      <article className="bestseller__item">
        <div className="bestseller__item-top">
          <img
            src="https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/9/2019/04/H4_1000x1000_vapour-999x999-483x451.png"
            alt="headphones"
            className={`bestseller__image`}
          />
          <Timer />
        </div>
        <div className="bestseller__item-bottom">
          <h3 className={`bestseller__name`}>White Solo 5 Wireless</h3>
          <p className={`bestseller__pricing`}>
            <s className={`bestseller__price`}>$129.00</s>
            <b className={`bestseller__sale`}>$100.00</b>
          </p>
        </div>
      </article>
    </>
  );
}

export default Item;
