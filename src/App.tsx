import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Category from "./containers/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <Category />
      <Footer />
    </div>
  );
}

export default App;
