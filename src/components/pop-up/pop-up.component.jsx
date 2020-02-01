import React from "react";
import {connect} from 'react-redux';

import CustomButton from "../custom-button/custom-button.component";

import {addItem} from '../../redux/cart/cart.actions'
import './pop-up.styles.css'

const PopUp = ({togglePopup, show, item, addItem}) => {
  const showPopup = show ? "modal display-block" : "modal display-none";
  const { title, price, desc, img, size} = item
  return (
    <div onClick={togglePopup} className={showPopup}>
      <section className="modal-main">
        <img className="popup-img" src={img} alt={item.title} />
        <h1>{title}</h1>
        <h2>{desc}</h2>
        <p>{size}</p>
        <p>${price}</p>
        <CustomButton onClick={() => addItem(item)}>Add To Cart</CustomButton>
      </section>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(PopUp);
