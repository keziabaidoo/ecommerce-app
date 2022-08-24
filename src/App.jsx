import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart />
        Say bye
      </React.Fragment>
    );
  }
}

export default App;
