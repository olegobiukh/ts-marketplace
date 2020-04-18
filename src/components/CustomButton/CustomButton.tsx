import "./index.scss";

import React from "react";

function CustomButton({ text = 'sdf', type = 'default' }) {
  console.log(text)
  return (
    <button
      className={`custom-button ${
        type !== "default" ? "custom-button--volumed" : "custom-button--default"
      }`}
    >
      {text}
    </button>
  );
}

export default CustomButton;
