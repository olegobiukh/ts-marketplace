import "./index.scss";

import React, { useState } from "react";

function Cart() {

  return (
    <div className={`product-main__cart`}>
      <span className={`product-main__cart-price`}>$1111</span>
      <div className={`product-main__cart-right`}>
        <input type="number" value={1} className={`product-main__cart-input`} />
        <button type="button" className={`product-main__cart-button`}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
