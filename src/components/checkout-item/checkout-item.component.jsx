import React from "react";

import "./checkout-item.styles.css";

const CheckoutItem = ({cartItem: {title, img, price, quantity}}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={img} alt="item" />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
