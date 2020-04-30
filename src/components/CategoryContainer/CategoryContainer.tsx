import "./index.scss";

import React from "react";
import Filter from "./Filter";
import { Pagination } from "antd";
import CatalogItems from "../CatalogItems";

function CategoryContainer() {
  return (
    <>
      <section className={`category-container`}>
        <Filter />
        <CatalogItems />
        <div className={`pagination`}>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </section>
    </>
  );
}

export default CategoryContainer;
