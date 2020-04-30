import "./index.scss";
import React from "react";
import Main from "../../components/product/Main";
import ProductTabs from "../../components/product/ProductTabs";
// import CategoryFilter from "../../components/CategoryFilter";
// import CategoryContainer from "../../components/CategoryContainer";

function Product() {
  return (
    <main className={`product`}>
      <Main />
      <ProductTabs />
    </main>
  );
}

export default Product;
