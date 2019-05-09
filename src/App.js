import React, { Component } from "react";
import "./App.css";
import RightComponent from "./RightComponent";
import MiddleComponent from "./MiddleComponent";
import LeftComponent from "./LeftComponent";
import NavComponent from "./NavComponent";
import "../src/NavComponent/navComponent.css";
import "../src/LeftComponent/leftComponent.css";
import "../src/MiddleComponent/middleComponent.css";
import "../src/RightComponent/rightComponent.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <div className="body">
          <LeftComponent />
          <MiddleComponent />
          <RightComponent />
        </div>
      </div>
    );
  }
}
export default App;