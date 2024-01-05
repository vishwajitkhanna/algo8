import React, { useState } from 'react';
import './ZoomableContainer.css'; // Import your CSS file
import "./Contmain.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContmainDetailBtn from "./Btn/ContmainDetailBtn";
import ContmainSettingBtn from "./Btn/ContmainSettingBtn";
import ContmainLegendBtn from "./Btn/ContmainLegendBtn";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const ZoomableContainer = () => {
  const [isZoomed, setZoom] = useState(false);

  const toggleZoom = () => {
    setZoom(!isZoomed);
  };

  return (
      <div className={`zoom-container ${isZoomed ? 'zoomed' : ''}`}>
          <div className="contmain-top">
            <Button id="document-btn" variant="outlined" endIcon={<KeyboardArrowDownIcon />}> Related Documents</Button>
             <ContmainDetailBtn />
             <ContmainSettingBtn />
          </div>
       <div className="contmain-center">Under Development</div> 
          <div className="contmain-bottom">
              <ContmainLegendBtn />
              <ZoomOutMapIcon onClick={toggleZoom} />
         
        </div>
    
    </div>
  );
};
export default ZoomableContainer;