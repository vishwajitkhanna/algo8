import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Aside from "./Components/Aside";
import Titlehead from "./Components/Titlehead";
import NestedGrid from "./Components/Demo";

const App = () => {
  return (
    <div className="main">
      <div className="main-left">
        <Aside />
      </div>
      <div className="main-right">
        <Nav />
        <Titlehead />
        <div className="main-center">
          <NestedGrid />
        </div>
      </div>
    </div>
  );
};

export default App;
