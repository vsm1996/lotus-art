import React from "react";
import PopUp from "../pop-up/pop-up.component";

import "./shop-item.styles.css";

const ShopItem = ({show, item, togglePopup}) => {
    
  return (
    <div onClick={togglePopup} className="col clearfix">
      <img src={item.img} alt="art desc." className="art-img" />
      <p className="art-text">{item.title}</p>
      <PopUp show={show} togglePopup={togglePopup} item={item}/>
    </div>
  );
};

export default ShopItem;
