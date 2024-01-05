import React, { useState } from "react";
import "./Zoom.css";
import "./Contmain.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContmainDetailBtn from "./Btn/ContmainDetailBtn";
import ContmainSettingBtn from "./Btn/ContmainSettingBtn";
import ContmainLegendBtn from "./Btn/ContmainLegendBtn";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ContButtonGroup from "./Contbtn";

const ZoomableContainer = () => {
  const [isZoomed, setZoom] = useState(false);

  const toggleZoom = () => {
    setZoom(!isZoomed);
  };

  return (
    <div className={`zoom-container ${isZoomed ? "zoomed" : ""}`}>
      <div className="contmain-top">
        <Button
          id="document-btn"
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
        >
          {" "}
          Related Documents
        </Button>
        <ContmainDetailBtn />
        <ContmainSettingBtn />
      </div>
      <div className="contmain-center">Under Development</div>
      <div className="contmain-bottom">
        <ContmainLegendBtn />
        <div className="contmain-bottom-right">
          <ContButtonGroup />
          <ZoomOutMapIcon
            sx={{ backgroundColor: "#0077B6", fill: "#ffffff" }}
            onClick={toggleZoom}
          />
        </div>
      </div>
    </div>
  );
};
export default ZoomableContainer;
