import React from "react";
import "./App.css";
import LoadToServer from "./LoadToServer";
import ShowFromServer from "./ShowFromServer";

const App = () => {
  return (
    <div className="App">
      <LoadToServer />
      <ShowFromServer />
    </div>
  );
};

export default App;
