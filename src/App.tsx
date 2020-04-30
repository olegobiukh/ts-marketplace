import React from "react";
import Home from "./containers/Home";
import Catalog from "./containers/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./containers/Product";
import Wishlist from "./containers/Wishlist";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      {/* <Catalog /> */}
      {/* <Product /> */}
      <Wishlist />
      <Footer />
    </div>
  );
}

export default App;
