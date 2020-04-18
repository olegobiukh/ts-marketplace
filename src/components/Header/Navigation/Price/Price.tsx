import "./index.scss";

import { AiOutlineShopping } from "react-icons/ai";

import React, { useState } from "react";

function Price() {
  const amount = 0;
  const quantity = 1;

  return (
    <div className={`price`}>
      <div className={`price__icon`}>
        <AiOutlineShopping size={20} />
        <span className={`price__quantity`}>{quantity}</span>
      </div>
      <span className={`price__amount`}>${amount}</span>
    </div>
  );
}

export default Price;
