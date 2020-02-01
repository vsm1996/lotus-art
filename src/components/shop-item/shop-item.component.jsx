import React, { Component } from "react";
import PopUp from "../pop-up/pop-up.component";

import "./shop-item.styles.css";

class ShopItem extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  togglePopup = e => {
    e.preventDefault();
    const showBool = this.state.show;
    this.setState({ show: !showBool });
  };

  render() {
    const { item } = this.props;
    const { title, img } = item;
    return (
      <div>
        <div onClick={this.togglePopup} className="col clearfix">
          <img src={img} alt="art desc." className="art-img" />
          <p className="art-text">{title}</p>
        </div>
        <PopUp
          show={this.state.show}
          togglePopup={this.togglePopup}
          item={item}
        />
      </div>
    );
  }
}

export default ShopItem;
