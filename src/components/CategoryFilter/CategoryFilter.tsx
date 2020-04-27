import "./index.scss";

import React from "react";
import FilterCategories from "./FilterCategories";
import CategoryFilterItem from "./CategoryFilterItem";

function CategoryFilter() {
  return (
    <section className={`category-filter`}>
      filter
      <CategoryFilterItem title="Product categories">
        <FilterCategories />
      </CategoryFilterItem>
    </section>
  );
}

export default CategoryFilter;
