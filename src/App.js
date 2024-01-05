import React from "react";
import "./App.css";
import Titlehead from "./Components/Titlehead";
import NestedGrid from "./Components/Maingrid";
import MiniDrawer from "./Components/Aside";

const App = () => {
  return (
    <div className="main">
      <MiniDrawer />
      <div className="main-right">
        <Titlehead />
        <div className="main-center">
          <NestedGrid />
        </div>
      </div>
    </div>
  );
};

export default App;
