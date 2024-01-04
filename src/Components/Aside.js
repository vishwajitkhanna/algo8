import React from "react";
import "./Aside.css";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import SettingsIcon from "@mui/icons-material/Settings";

const Aside = () => {
  return (
    <aside>
      <div className="aside-menuicon">
        <MenuIcon />
      </div>
      <div>
        <DashboardCustomizeIcon />
      </div>
      <div>
        <SettingsIcon />
      </div>
    </aside>
  );
};

export default Aside;
