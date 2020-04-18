import "./index.scss";

import React from "react";
import Categories from "./Categories";
import Price from "./Price";

function Navigation() {
  return (
    <div className={`navigation`}>
      <Categories />
      <Price />
    </div>
  );
}

export default Navigation;
