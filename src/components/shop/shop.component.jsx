import React, { Component } from 'react'

import ShopList from '../shop-list/shop-list.component';
import BackToTop from '../back-to-top/back-to-top.component'
import './shop.styles.css'
 
class Shop extends Component {
    render() {
        return (
            <div className="shop">
                {/* <h2>Shop</h2> */}
                <ShopList/>
                <BackToTop/>
            </div>
        )
    }
}

export default Shop;