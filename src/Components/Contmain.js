import React from "react";
import "./Contmain.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContmainDetailBtn from "./Btn/ContmainDetailBtn";
import ContmainSettingBtn from "./Btn/ContmainSettingBtn";
import ContmainLegendBtn from "./Btn/ContmainLegendBtn";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const Contmain = () => {
  return (
    <div className="contmain-con">
      <div className="contmain-top">
        <Button
          id="document-btn"
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
        >
          Related Documents
        </Button>
        <ContmainDetailBtn />
        <ContmainSettingBtn />
      </div>
      <div className="contmain-center">Under Development</div>
      <div className="contmain-bottom">
        <ContmainLegendBtn />
        <div>
          <ZoomOutMapIcon />
        </div>
      </div>
    </div>
  );
};

export default Contmain;
