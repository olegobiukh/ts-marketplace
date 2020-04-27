import "./index.scss";

import React from "react";

const img = "https://elab.stylemixthemes.com/demo-6/wp-content/uploads/sites/9/2019/03/slider-banners-1920x550-07-1917x549.jpg";

function CategoryBanner() {
  return (
    <div
      className={`category-banner`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <p className={`category-banner__text`}>Looking for more?</p>
      <h1 className={`category-banner__title`}>
        Get <span className={`category-banner__title--blue`}>$100</span> Voucher
        <span className={`category-banner__title--blue`}>*</span>
        <br />
        for <span className={`category-banner__title--thin`}>Mobiles</span>
      </h1>
      <button className="category-banner__button">shop now</button>
    </div>
  );
}

export default CategoryBanner;
