import "./index.scss";

import React, { useState } from "react";
import "antd/dist/antd.css";
import Slider from "./Slider";
import Right from "./Right";

function Main() {
  return (
    <div className={`product-main`}>
      <Slider />
      <Right />
    </div>
  );
}

export default Main;
