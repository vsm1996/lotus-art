import React from "react";
import './pop-up.styles.css'
const PopUp = ({togglePopup, show, children}) => {
  const showPopup = show ? "modal display-block" : "modal display-none";
  return (
    <div onClick={togglePopup} className={showPopup}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default PopUp;
