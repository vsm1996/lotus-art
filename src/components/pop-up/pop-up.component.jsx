import React from "react";
import './pop-up.styles.css'
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
        <button>Add to Cart</button>
      </section>
    </div>
  );
};

export default PopUp;
