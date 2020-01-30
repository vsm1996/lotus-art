import React from "react";
import './pop-up.styles.css'
const PopUp = () => {
  return (
    <div class="popup" id="about__popup">
      <h2>Popup content</h2>
      <div class="popup__content">
        <div class="popup__left">
          {/* <img src="img/regular-lotus.jpg" alt="Tour photo" class="popup__img"/>  */}
        </div>

        <div class="popup__right">
          <a href="/#" class="popup__close btn--close">
            &times;
          </a>
          <h2 class="heading-secondary u-margin-bottom-small">About</h2>
          {/* <h3 class="heading-tertiary u-margin-bottom-small">Art size</h3> */}
          <p class="popup__text">About</p>
          {/* <a href="#" class="btn btn--purple">Buy now</a>  */}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
