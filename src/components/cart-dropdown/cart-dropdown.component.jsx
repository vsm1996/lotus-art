import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.css'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
