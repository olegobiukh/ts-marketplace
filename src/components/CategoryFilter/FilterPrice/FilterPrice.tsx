import "./index.scss";

import React, { useState } from "react";
import uid from "uid";
import "antd/dist/antd.css";
import { Slider, Button } from "antd";

const marks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100°C</strong>,
  },
};

function FilterPrice() {
  const items = ["sdf", "sdf", "sdfasdff", "sdafs"];
  const itemsLength = items.length;
  const [beginningIndex, setBeginningIndex] = useState(0);
  const [endingindex, setEndingindex] = useState(itemsLength);

  type sliderPropsType = {
    onChange: (values: React.SetStateAction<number>[]) => void;
  };

  const sliderProps: sliderPropsType = {
    onChange: (values: React.SetStateAction<number>[]) => {
      setBeginningIndex(values[0]);
      setEndingindex(values[1]);
    },
  };

  const setItems = (event: any) => {
    console.log(event);

    setBeginningIndex(event[0]);
    setEndingindex(event[1]);
  };

  const min = 0;
  const max = items.length - 1;
  const defaultValue: [number, number] = [beginningIndex, endingindex - 1];

  return (
    <div className={`filter-price`}>
      <div className={`filter-price__slider`}>
        <Slider
          range
          defaultValue={defaultValue}
          min={min}
          max={max}
          onChange={(event) => setItems(event)}
        />
      </div>
      <div className={`filter-price__bottom`}>
        <Button type="primary">Filter</Button>
        <div className="filter-price__text">
          Price:
          <span className="filter-price__range">
            ${beginningIndex} - ${endingindex}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterPrice;
