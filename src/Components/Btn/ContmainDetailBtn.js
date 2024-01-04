import React from "react";
import "./ContmainDetailBtn.css";
import Button from "@mui/material/Button";

const ContmainDetailBtn = () => {
  return (
    <div>
      <Button
        className="contmainDetailBtnHover"
        id="document-btn2"
        variant="outlined"
      >
        Details
        <div className="contmainDetailBtnSubmenuHover">
          <div className="details-details">
            <div>Details</div>
            <div className="details-active">Active</div>
          </div>
          <div>
            <div className="details-middle">
              <span className="details-eqwidth">Name/Title</span>
              <span className="details-colon"> : </span>
              <span>Wet Gas Compressor</span>
            </div>
            <div className="details-middle">
              <span className="details-eqwidth">Type</span>
              <span className="details-colon"> : </span>
              <span>Static</span>
            </div>
            <div className="details-middle">
              <span className="details-eqwidth">Parent</span>
              <span className="details-colon"> : </span>
              <span>INDMAX</span>
            </div>
            <div className="details-middle">
              <span className="details-eqwidth">Location</span>
              <span className="details-colon"> : </span>
              <span>Prdip</span>
            </div>
            <div className="details-middle">
              <span className="details-eqwidth">Aliases</span>
              <span className="details-colon"> : </span>
              <span>023 K 010</span>
            </div>
          </div>
          <hr />
          <div className="details-details">Tags List</div>
          <div className="details-bottom">
            <div className="details-details">
              <div>Flue gas Flow</div>
              <div>023FI2503</div>
            </div>
            <div className="details-details">
              <div>Flue gas Pressure</div>
              <div>023PI0099</div>
            </div>
            <div className="details-details">
              <div>Flue gas Temperature</div>
              <div>023TI0031</div>
            </div>
            <div className="details-details">
              <div>Flue gas Temperature</div>
              <div>023TI0033</div>
            </div>
            <div className="details-details">
              <div>Water Flow</div>
              <div>023FIC2026</div>
            </div>
            <div className="details-details">
              <div>Water Pressure</div>
              <div>023PI2766</div>
            </div>
            <div className="details-details">
              <div>Water Temperature</div>
              <div>023TI2751</div>
            </div>
            <div className="details-details">
              <div>Steam Flow</div>
              <div>023FI2027</div>
            </div>
            <div className="details-details">
              <div>Steam Pressure</div>
              <div>023PIC2018</div>
            </div>
            <div className="details-details">
              <div>Steam Temperature</div>
              <div>023TIC2761</div>
            </div>
            <div className="details-details">
              <div>Composition Oxygen</div>
              <div>023AI0001</div>
            </div>
            <div className="details-details">
              <div>composition CO</div>
              <div>023AI0002A</div>
            </div>
            <div className="details-details">
              <div>Compostion Opacity</div>
              <div>023AI0003A</div>
            </div>
            <div className="details-details">
              <div>composition SPM</div>
              <div>023AI0003B</div>
            </div>
            <div className="details-details">
              <div>composition HC</div>
              <div>023AI2100A</div>
            </div>
            <div className="details-details">
              <div>composition CO</div>
              <div>023AI2101B</div>
            </div>
            <div className="details-details">
              <div>composition NOX</div>
              <div>023AI2101A</div>
            </div>
            <div className="details-details">
              <div>composition SOX</div>
              <div>023AI2101B</div>
            </div>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default ContmainDetailBtn;
