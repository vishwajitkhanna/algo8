import React from "react";
import "./Titlehead.css";
import Shift from "./Shift";
import Datagran from "./Datagran";

const Titlehead = () => {
  return (
    <div className="titlehead">
      <div className="titlehead-left">
        <span className="titlehead-topic">Wet Gas Compressor</span>
        <span>
          {" "}
          <sub>As on 18/05/2023 12:53:32</sub>
        </span>
      </div>
      <div className="titlehead-right">
        <div>
          <Shift />
        </div>
        <Datagran />
      </div>
    </div>
  );
};

export default Titlehead;
