import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <div className="title">
              <Link to="/">
                <h1>Lotus Art</h1>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/events">Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
