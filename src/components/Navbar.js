import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";

export default function Navbar() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/">LOGO</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Strona Główna</Link>
          </li>
          <li>
            <Link to="/products">Produkty</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
