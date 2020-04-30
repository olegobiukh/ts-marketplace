import "./index.scss";

import React, { useState } from "react";
import uid from "uid";
import { AiOutlineMinusSquare } from "react-icons/ai";

function FilterBrands() {
  const filterItems = [
    {
      id: 0,
      title: "Acer",
      amount: 10,
    },
    {
      id: 0,
      title: "Acer",
      amount: 14,
    },
    {
      id: 0,
      title: "Acer",
      amount: 3,
    },
    {
      id: 0,
      title: "Acer",
      amount: 7,
    },
    {
      id: 0,
      title: "Acer",
      amount: 6,
    },
    {
      id: 0,
      title: "Acer",
      amount: 15,
    },
  ];

  const setItems = (items: any[]) => {
    return items.map((item) => (
      <>
        <li key={uid()} className={`filter-brands__item`}>
          <div key={uid()} className={`filter-brands__item`}>
            <AiOutlineMinusSquare className={`filter-brands__minus`} />
            <p className={`filter-brands__title`}>
              <span className={`filter-brands__title-first`}>{item.title}</span>{" "}
              <span className={`filter-brands__amount`}>({item.amount})</span>
            </p>
          </div>
        </li>
      </>
    ));
  };

  return <ul className={`filter-brands`}>{setItems(filterItems)}</ul>;
}

export default FilterBrands;
