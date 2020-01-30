import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Shop from "./components/shop/shop.component";
import Events from "./components/events/event.component";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

import './App.css'

class App extends Component {
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

export default App;
