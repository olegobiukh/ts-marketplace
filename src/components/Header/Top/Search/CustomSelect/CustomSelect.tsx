import "./index.scss";

import React, { useState } from "react";

const categories = [
  "All categories",
  "accessories",
  "cameras & photos",
  "computers",
  "gadgets",
  "game consoles & games",
  "headphones",
  "mobiles & tablets",
  "speakers",
  "tools & storage",
  "TV's & audio",
  "watches",
];

function CustomSelect() {
  const [category, setCategory] = useState(categories[0]);
  const [isOpen, toggleCategory] = useState(false);

  const onSecondCityChange = (value: any) => {
    setCategory(value);
    toggleCategory(false);
  };

  const options = categories
    .filter((item) => item !== category)
    .map((item, index) => (
      <li
        key={index}
        className={`custom-select__item`}
        onClick={() => onSecondCityChange(item)}
      >
        {item}
      </li>
    ));

  return (
    <div className={`custom-select`}>
      <div
        className={`custom-select__chosen ${
          isOpen && "custom-select__chosen--open"
        }`}
        onClick={() => toggleCategory(!isOpen)}
      >
        <span className={`custom-select__chosen-text`}>{category}</span>
      </div>
      {isOpen && <ul className={`custom-select__list`}>{options}</ul>}
    </div>
  );
}

export default CustomSelect;
