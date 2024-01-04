import React from "react";
import "./Nav.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Nav = () => {
  return (
    <nav>
      <div>
        <span className="logo-color">Digital Twin</span>
        <span className="logo-space"> | </span>
        <span>INDMAX</span>
      </div>
      <div className="nav-left">
        <div>Last Updated on 18/05/2023</div>
        <NotificationsIcon />
        <div>
          <AccountCircleIcon />
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
