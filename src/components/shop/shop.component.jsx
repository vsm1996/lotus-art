import React, { Component } from 'react'

import ShopList from '../shop-list/shop-list.component';
import BackToTop from '../back-to-top/back-to-top.component'
import './shop.styles.css'
 
class Shop extends Component {
    render() {
        return (
            <div className="shop">
                <ShopList/>
                <BackToTop/>
            </div>
        )
    }
}

export default Shop;