import React from "react";
import "./Nav.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Nav = () => {
  let onProfile = () => {};
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
        <div className="nav-profile">
          <AccountCircleIcon />
          <KeyboardArrowDownIcon />
          <div className="nav-profile-menu" onClick={onProfile}>
            <div>Profile Setting</div>
            <div>Walkthrough</div>
            <div>Signout</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
