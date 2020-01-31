import React, { Component } from "react";
import ShopItem from "../shop-item/shop-item.component";
import PopUp from "../pop-up/pop-up.component";

import "./shop-list.styles.css";
import { firestore } from "../../firebase/firebase.utils";

class ShopList extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      shoplist: []
    };
  }

  componentDidMount() {
    this.getArt();
  }

  getArt = async () => {
    const art = [];
    let artRefs = firestore.collection("art");
    await artRefs
      .get()
      .then(snapshot => {
        // console.log(snapshot.docs);
        snapshot.forEach(doc => {
          // console.log(doc.id, '=>', doc.data())
          art.push(doc.data());
        });
      })
      .catch(err => {
        console.log("Error getting documents");
      });

    this.setState({ shoplist: art });
  };

  togglePopup = e => {
    e.preventDefault();
    const showBool = this.state.show;
    this.setState({ show: !showBool });
  };

  render() {
    const { shoplist,show } = this.state;
    return (
      <div className="shop-list shop-list-grid">
        {shoplist
          ? shoplist.map((item, i) => (
              <ShopItem togglePopup={this.togglePopup} key={i} item={item} />
            ))
          : null}
          {/* {show ? (<p>showing</p>)  : ''} */}
          <PopUp show={show} togglePopup={this.togglePopup}> Beetlejuice</PopUp>
      </div>
    );
  }
}

export default ShopList;
