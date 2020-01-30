import React, { Component } from "react";
import ShopItem from "../shop-item/shop-item.component";
import PopUp from "../pop-up/pop-up.component";
import image from "../../assets/img/regular-lotus.jpg";

import "./shop-list.styles.css";

class ShopList extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      shoplist: [
        {
          title: "item1",
          img: "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83260870_677627976107958_2442621982195128702_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=d-2g8WA9mt0AX8a0nvM&oh=e5350acaa583e93ed9d5dea8828e2797&oe=5EDA0972"
        },
        {
          title: "item2",
          img: image
        },
        {
          title: "item3",
          img: "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83260870_677627976107958_2442621982195128702_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=d-2g8WA9mt0AX8a0nvM&oh=e5350acaa583e93ed9d5dea8828e2797&oe=5EDA0972"
        },
        {
          title: "item4",
          img: image
        },
        {
          title: "item5",
          img: "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83260870_677627976107958_2442621982195128702_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=d-2g8WA9mt0AX8a0nvM&oh=e5350acaa583e93ed9d5dea8828e2797&oe=5EDA0972"
        },
        {
          title: "item6",
          img: image
        },
        {
          title: "item7",
          img: "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83260870_677627976107958_2442621982195128702_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=d-2g8WA9mt0AX8a0nvM&oh=e5350acaa583e93ed9d5dea8828e2797&oe=5EDA0972"
        },
        {
          title: "item8",
          img: image
        },
        {
          title: "item9",
          img: "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83260870_677627976107958_2442621982195128702_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=d-2g8WA9mt0AX8a0nvM&oh=e5350acaa583e93ed9d5dea8828e2797&oe=5EDA0972"
        }
      ]
    };
  }

  togglePopup = e => {
    e.preventDefault();
    console.log("clicked");
    const openBool = this.state.open;
    this.setState({open : !openBool})
    return (
      <PopUp open={this.state.open}/>
    )
  };

  render() {
    const { shoplist } = this.state;
    return (
      <div className="shop-list shop-list-grid">
        {shoplist
          ? shoplist.map((item, i) => (
              <ShopItem togglePopup={this.togglePopup} key={i} item={item} />
            ))
          : null}
      </div>
    );
  }
}

export default ShopList;
