import React from "react";
import "./ContmainSettingBtn.css";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";

const ContmainSettingBtn = () => {
  return (
    <div>
      <Button className="contmainSettingBtnHover" id="document-btn">
        <SettingsIcon />
        <div className="contmainSettingBtnSubmenuHover">
          <div className="BtnSubmenuHover-checkbox">
            <div>
              <input type="checkbox" />
              Show Tag Values
            </div>
            <div>
              <input type="checkbox" />
              Show Tag Value Trends
            </div>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default ContmainSettingBtn;
