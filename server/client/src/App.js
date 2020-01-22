import React, { Component } from "react";
import "./App.css";
import LoadToServer from "./LoadToServer";
import ShowFromServer from './ShowFromServer'

class App extends Component {
  render() {
    return (
      <div  className="App">
        <LoadToServer />
        <ShowFromServer />
      </div>
    );
  }
}

export default App;
