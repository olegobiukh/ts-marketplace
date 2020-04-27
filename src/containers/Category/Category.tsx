import "./index.scss";
import React from "react";
import CategoryBanner from "../../components/CategoryBanner";
import CategoryFilter from "../../components/CategoryFilter";
import CategoryContainer from "../../components/CategoryContainer";

function Category() {
  return (
    <div className={`category`}>
      <CategoryFilter />
      <div className="category__right">
        <CategoryBanner />
        <CategoryContainer />
      </div>
    </div>
  );
}

export default Category;
