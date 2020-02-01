import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux'

import Header from "./components/header/header.component";
import Shop from "./components/shop/shop.component";
import Events from "./components/event-list/event-list.component";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

import { firestore } from "./firebase/firebase.utils";
import { getShopList } from './redux/shop/shop.actions'

import './App.css'

class App extends Component {
  componentDidMount() {
    this.getArt();
  }

  getArt = async () => {
    const { getShopList } = this.props
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

    getShopList(art);
  };

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Shop}/>
          <Route path="/events" component={Events}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

const matchDispatchToProps = dispatch => ({
  getShopList: shoplist => dispatch(getShopList(shoplist))
})

export default connect(null, matchDispatchToProps)(App);
