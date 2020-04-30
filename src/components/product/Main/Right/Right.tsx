import "./index.scss";

import React from "react";
import Top from "./Top";
import Cart from "./Cart";
import Bottom from "./Bottom";

function Right() {
  return (
    <div className={`product-main__right`}>
      <Top />
      <Cart />
      <Bottom />
    </div>
  );
}

export default Right;
