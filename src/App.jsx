import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { Category, Promo, Product } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/category/:categoryId" component={Category} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/" component={Promo} />
      </Switch>
    </Router>
  );
};

export default App;
