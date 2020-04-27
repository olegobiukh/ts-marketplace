import "./index.scss";
import React from "react";
import HomeSlider from "../../components/HomeSlider";
import ScrollSlider from "../../components/ScrollSlider";
import Bestseller from "../../components/Bestseller";

function Home() {
  return (
    <div>
      <HomeSlider />
      <ScrollSlider />
      <Bestseller />
    </div>
  );
}

export default Home;
