import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";
import {
  StyledNavbar,
  StyledNavLogo,
  StyledNavItems,
  StyledLink,
} from "../styled/Navbar";

export default function Navbar() {
  return (
    <Router>
      <StyledNavbar>
        <StyledNavLogo>
          <Link to="/">LOGO</Link>
        </StyledNavLogo>
        <StyledNavItems>
          <li>
            <StyledLink to="/">Strona Główna</StyledLink>
          </li>
          <li>
            <StyledLink to="/products">Produkty</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Kontakt</StyledLink>
          </li>
        </StyledNavItems>
      </StyledNavbar>

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
