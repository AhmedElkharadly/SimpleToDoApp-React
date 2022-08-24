import React from "react";
import Myhero from "./Components/Hero";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Myhero />
      </div>
    );
  }
}

export default App;
