import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <nav>
        <ul className="navi__list">
          <li>
            <Link to={"/"}> Promotions </Link>
          </li>
          <li>
            <Link to={"/category/1"}> Winter Offer</Link>
          </li>
          <li>
            <Link to={"/category/2"}> Spring Offer</Link>
          </li>
          <li>
            <Link to={"/category/3"}> Autumn Offer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
