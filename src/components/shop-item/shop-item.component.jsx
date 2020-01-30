import React from "react";

import "./shop-item.styles.css";

const ShopItem = ({item, togglePopup}) => {
    
  return (
    <div onClick={togglePopup} className="col clearfix">
      <img src={item.img} alt="art desc." className="art-img" />
      <p className="art-text">{item.title}</p>
    </div>
  );
};

export default ShopItem;
