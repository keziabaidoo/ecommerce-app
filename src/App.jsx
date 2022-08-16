import React, { Component } from "react";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainContent />
        Say bye
      </React.Fragment>
    );
  }
}

export default App;
