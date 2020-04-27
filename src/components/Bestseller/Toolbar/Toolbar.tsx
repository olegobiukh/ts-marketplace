import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { BsCamera, BsPhone } from "react-icons/bs";
import { GoWatch } from "react-icons/go";
import { FiHeadphones } from "react-icons/fi";

function Toolbar({ text = "sdf", type = "default" }) {
  return (
    <div className="bestseller__toolbar">
      <AiOutlineShopping className="bestseller__icon" />
      <BsCamera className="bestseller__icon" />
      <BsPhone className="bestseller__icon" />
      <GoWatch className="bestseller__icon" />
      <FiHeadphones className="bestseller__icon" />
    </div>
  );
}

export default Toolbar;
