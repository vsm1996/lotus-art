import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector } from 'reselect'

import {selectCartHidden} from '../../redux/cart/cart.selectors'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.css";

const Header = ({ hidden }) => {
  return (
    <div className="header">
      <nav>
        <ul className="nav-ul">
          <div className="title">
            <li>
              <Link to="/">
                <h1>Lotus Art</h1>
              </Link>
            </li>
          </div>
          <div className="options">
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
            <li className="cart-icon">
              <CartIcon />
            </li>
          </div>
        </ul>
      </nav>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

//destructure nested value
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
