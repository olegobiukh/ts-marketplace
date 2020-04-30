import React from "react";
import Home from "./containers/Home";
import Catalog from "./containers/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./containers/Product";
import Wishlist from "./containers/Wishlist";
import Cart from "./containers/Cart";
import routes from "./router";

import { Route, Link, Switch, Redirect } from "react-router-dom";
import uid from "uid";

function App() {
  const newRoutes = routes.map((item) => (
    <Route key={uid()} exact path={item.url} component={item.component} />
  ));

  return (
    <div>
      <Header />
      <Switch>
        {newRoutes}
        {/* <Route exact path="/" component={Home} />
        <Route path="/messages" component={Messages} />
        <Route path="/about" component={About} />
        <Redirect to="/" /> */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
