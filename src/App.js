import React from "react";
import "./App.css";
import Titlehead from "./Components/Titlehead";
import NestedGrid from "./Components/Demo";
import MiniDrawer from "./Components/Qwertyu";

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
