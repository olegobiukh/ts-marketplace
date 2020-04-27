import "./index.scss";

import React from "react";

function Timer({ text = "sdf", type = "default" }) {
  console.log(text);
  return (
    <div className="timer">
      <div className="timer__item">
        <span className="timer__number">99</span>
        <span className="timer__text">day</span>
      </div>
      <div className="timer__item">
        <span className="timer__number">02</span>
        <span className="timer__text">hours</span>
      </div>
      <div className="timer__item">
        <span className="timer__number">08</span>
        <span className="timer__text">minutes</span>
      </div>
      <div className="timer__item">
        <span className="timer__number">15</span>
        <span className="timer__text">seconds</span>
      </div>
    </div>
  );
}

export default Timer;
