import "./index.scss";

import React, { useState } from "react";
import uid from "uid";

function Top() {
  const item = {
    title: "AA EliteBook G2",
    info: {
      sku: 8,
      categories: "computers, laptops",
    },
    list: [
      "Screen Size: 11.6″",
      "Processor Type: Core i5 HQ",
      "Processor Speed: 1.90 GHz",
      "Standard Memory: 4 GB",
      "Operating System: Windows 8.1 Pr",
    ],
  };

  const ItemInfo = Object.entries(item.info).map(([title, value]) => (
    <span key={uid()} className="product-main__top-text">
      {title}: {value}
    </span>
  ));

  const ItemList = item.list.map((item) => (
    <li key={uid()} className="product-main__top-item">
      {item}
    </li>
  ));

  return (
    <div className={`product-main__top`}>
      <h2 className="product-main__top-title">{item.title}</h2>
      <p className="product-main__top-box">{ItemInfo}</p>
      <ul className="product-main__top-list">{ItemList}</ul>
    </div>
  );
}

export default Top;
