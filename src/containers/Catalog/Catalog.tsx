import "./index.scss";
import React from "react";
import CategoryBanner from "../../components/CategoryBanner";
import CategoryFilter from "../../components/CategoryFilter";
import CategoryContainer from "../../components/CategoryContainer";

function Catalog() {
  return (
    <div className={`catalog`}>
      <CategoryFilter />
      <div className="catalog__right">
        <CategoryBanner />
        <CategoryContainer />
      </div>
    </div>
  );
}

export default Catalog;
