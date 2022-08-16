import React from 'react'; 
import ReactDom from 'react-dom';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import NavBar from "./NavBar";
import "./index.css";
import App from "./App"

 
ReactDom.render(<App />,document.getElementById("root"));

