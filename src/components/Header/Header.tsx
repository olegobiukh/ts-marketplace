import "./index.scss";

import React from "react";
import Top from "./Top";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className={`header`}>
      <div className={`header__wrapper`}>
        <Top />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
