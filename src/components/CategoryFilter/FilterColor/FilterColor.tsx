import "./index.scss";

import React, { useState } from "react";
import uid from "uid";

function FilterColor() {
  
  const colors = [
    {
      id: 0,
      color: "blue",
      amount: 10,
    },
    {
      id: 1,
      color: "green",
      amount: 14,
    },
    {
      id: 2,
      color: "red",
      amount: 3,
    },
   
  ];

  const setItems = (items: any[]) => {
    return items.map((item) => (
      <>
        <li key={uid()} className={`filter-color__item`}>
          <div key={uid()} className={`filter-color__item`}>
            <input type="checkbox" name="" id=""/>
            <p className={`filter-color__title`}>
              <span className={`filter-color__title-first`}>{item.color}</span>{" "}
              <span className={`filter-color__amount`}>({item.amount})</span>
            </p>
          </div>
        </li>
      </>
    ));
  };

  return <ul className={`filter-color`}>{setItems(colors)}</ul>;
}

export default FilterColor;
