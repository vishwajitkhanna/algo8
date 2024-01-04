import React from "react";
import "./ContmainLegendBtn.css";
import InterestsIcon from "@mui/icons-material/Interests";
import Button from "@mui/material/Button";

const ContmainLegendBtn = () => {
  return (
    <div>
      <Button
        className="contmainLegendBtnHover"
        id="document-btn4"
        variant="contained"
        startIcon={<InterestsIcon style={{ fill: "#ffffff" }} />}
      >
        Legends
        <div className="contmainLegendBtnSubmenuHover">
          <div>Status</div>
          <div>Healthy</div>
          <div>At Risk</div>
          <div>Critical</div>
          <div>Design Limit Breach</div>
          <div>Contents</div>
          <div>Wet Gas Compressor</div>
          <div>Heat Exchanger</div>
          <div>Pump</div>
          <div>Air Compressor</div>
          <div>Vessel</div>
          <div>Pipe</div>
          <div>Tag Values</div>
        </div>
      </Button>
    </div>
  );
};

export default ContmainLegendBtn;
