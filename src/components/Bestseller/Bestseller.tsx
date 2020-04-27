import "./index.scss";

import React from "react";
import Item from "./Item";
import Items from "./Items";
import Toolbar from "./Toolbar";

function Bestseller({ text = "sdf", type = "default" }) {
  console.log(text);
  return (
    <section className="bestseller">
      <div className="bestseller__wrapper">
        <div className="bestseller__top">
          <h2 className="bestseller__title">Bestsellers</h2>
         <Toolbar />
        </div>
        <div className="bestseller__container">
          <Item />
          <Items />
        </div>
      </div>
    </section>
  );
}

export default Bestseller;
