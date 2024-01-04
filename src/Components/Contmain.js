import React from "react";
import "./Contmain.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContmainDetailBtn from "./ContmainDetailBtn";
import ContmainSettingBtn from "./ContmainSettingBtn";
import ContmainLegendBtn from "./ContmainLegendBtn";
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
      </div>
    </div>
  );
};

export default Contmain;
