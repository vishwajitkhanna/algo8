import React from "react";
import "./ContmainSettingBtn.css";
import SettingsIcon from "@mui/icons-material/Settings";

const ContmainSettingBtn = () => {
  return (
    <div className="setting-btn">
      <SettingsIcon style={{ fill: "#ffffff" }} className="setting-icon" />
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
    </div>
  );
};

export default ContmainSettingBtn;
