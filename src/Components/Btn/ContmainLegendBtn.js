import React from "react";
import "./ContmainLegendBtn.css";
import InterestsIcon from "@mui/icons-material/Interests";
import Button from "@mui/material/Button";
import SquareIcon from "@mui/icons-material/Square";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AllOutIcon from "@mui/icons-material/AllOut";
import CompressIcon from "@mui/icons-material/Compress";
import Crop169Icon from "@mui/icons-material/Crop169";
import TollIcon from "@mui/icons-material/Toll";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

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
          <div className="contmain-heading">Status</div>
          <div>
            <SquareIcon sx={{ fontSize: 12, fill: "#eFeFeF" }} />
            Healthy
          </div>
          <div>
            <SquareIcon sx={{ fontSize: 12, fill: "#DC8B31" }} />
            At Risk
          </div>
          <div>
            <SquareIcon sx={{ fontSize: 12, fill: "#D85140" }} />
            Critical
          </div>
          <div>
            <ChangeHistoryIcon sx={{ fontSize: 12, fill: "#EA8601" }} />
            Design Limit Breach
          </div>
          <div className="contmain-heading">Contents</div>
          <div>
            <TollIcon sx={{ fontSize: 12 }} />
            Wet Gas Compressor
          </div>
          <div>
            <PanoramaFishEyeIcon sx={{ fontSize: 12 }} />
            Heat Exchanger
          </div>
          <div>
            <AllOutIcon sx={{ fontSize: 12 }} />
            Pump
          </div>
          <div>
            <CompressIcon sx={{ fontSize: 12 }} />
            Air Compressor
          </div>
          <div>
            <Crop169Icon sx={{ fontSize: 12 }} />
            Vessel
          </div>
          <div>
            <HorizontalRuleIcon sx={{ fontSize: 12, fill: "#0077B6" }} />
            Pipe
          </div>
          <div>
            <CompareArrowsIcon sx={{ fontSize: 12, fill: "#0077B6" }} />
            Tag Values
          </div>
        </div>
      </Button>
    </div>
  );
};

export default ContmainLegendBtn;
