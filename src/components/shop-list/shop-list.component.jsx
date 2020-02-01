import React, { Component } from "react";
import {connect} from 'react-redux'

import ShopItem from "../shop-item/shop-item.component";

import "./shop-list.styles.css";

class ShopList extends Component {

  render() {
    const { shoplist } = this.props;
    return (
      <div className="shop-list shop-list-grid">
        {shoplist
          ? shoplist.map(item => (
              <ShopItem togglePopup={this.togglePopup} key={item.id} item={item} />
            ))
          : null}
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shoplist: state.shop.shoplist
})

export default connect(mapStateToProps)(ShopList);
