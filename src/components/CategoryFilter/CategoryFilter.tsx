import "./index.scss";

import React from "react";
import FilterCategories from "./FilterCategories";
import CategoryFilterItem from "./CategoryFilterItem";
import FilterBrands from "./FilterBrands";
import FilterColor from "./FilterColor";
import FilterPrice from "./FilterPrice";

function CategoryFilter() {
  return (
    <section className={`category-filter`}>
      <CategoryFilterItem title="Product categories">
        <FilterCategories />
      </CategoryFilterItem>
      <CategoryFilterItem title="Brands">
        <FilterBrands />
      </CategoryFilterItem>
      <CategoryFilterItem title="Color">
        <FilterColor />
      </CategoryFilterItem>
      <CategoryFilterItem title="Price">
        <FilterPrice />
      </CategoryFilterItem>
    </section>
  );
}

export default CategoryFilter;
