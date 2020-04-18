import "./index.scss";

import React from "react";
import Top from "./Top";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className={`header`}>
      <Top />
      <Navigation />
    </header>
  );
}

export default Header;
