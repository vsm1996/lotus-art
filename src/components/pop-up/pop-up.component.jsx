import React from "react";
import './pop-up.styles.css'
import CustomButton from "../custom-button/custom-button.component";

const PopUp = ({togglePopup, show, item}) => {
  const showPopup = show ? "modal display-block" : "modal display-none";
  return (
    <div onClick={togglePopup} className={showPopup}>
      <section className="modal-main">
        <img className="popup-img" src={item.img} alt={item.title} />
        <h1>{item.title}</h1>
        <h2>{item.desc}</h2>
        <p>{item.size}</p>
        <p>${item.price}</p>
        <CustomButton>Add To Cart</CustomButton>
      </section>
    </div>
  );
};

export default PopUp;
