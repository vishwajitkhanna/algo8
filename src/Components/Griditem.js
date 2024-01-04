import React from "react";
import "./Griditem.css";
import graph from "../Logo/graph.png";
import { LineChart } from "@mui/x-charts/LineChart";

const Griditem = () => {
  return (
    <div className="grid-con">
      <div className="c1">
        <div className="c1-top">Efficiency Anomaly Score</div>
        <div className="c1-checkbox">
          <div>
            <div className="c1-checkbox1"></div>
            Anomaly Score
          </div>
          <div>
            <div className="c1-checkbox2"></div>
            Anomaly Threshold
          </div>
          <div>
            <div className="c1-checkbox3"></div>
            Risk zone
          </div>
        </div>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={400}
          height={125}
        />
      </div>
      <div className="c2">
        <div className="c1-top">Health Anomaly Score</div>
        <div className="c1-checkbox">
          <div>
            <div className="c1-checkbox1"></div>
            Anomaly Score
          </div>
          <div>
            <div className="c1-checkbox2"></div>
            Anomaly Threshold
          </div>
          <div>
            <div className="c1-checkbox3"></div>
            Risk zone
          </div>
        </div>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [8, 5.5, 2, 8.5, 1.5, 5],
              area: true,
            },
          ]}
          width={400}
          height={125}
        />
      </div>
      <div className="c3">
        <div id="c3-firstdiv" className="c3-alldiv">
          Trip Tags
        </div>
        <div className="c3-overflowitem">
          <div>
            <div>Turbine Shaft Axial Displ.</div>
            <div className="c3-grid">
              <div>
                98.34<sub> &#181;m </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Compressor Shaft Axial Displ.</div>
            <div className="c3-grid">
              <div>
                45<sub> &#181;m </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Turbine Shaft Vibration - NDE</div>
            <div className="c3-grid">
              <div>
                98.34<sub> &#181;m </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Turbine Shaft Vibration - DE</div>
            <div className="c3-grid">
              <div>
                45<sub> &#181;m </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Compression Shaft Vibration - DE</div>
            <div className="c3-grid">
              <div>
                45<sub> &#181;m </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Compression Shaft Vibration - DE</div>
            <div className="c3-grid">
              <div>
                98.34<sub> &#181;m </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Turbine Thrust Bearing Temp : AS</div>
            <div className="c3-grid">
              <div>
                98.34<sub> &#176;C </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Turbine Thrust Bearing Temp : NAS</div>
            <div className="c3-grid">
              <div>
                45<sub> &#176;C </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Turbine Journal Bearing Temp : ND</div>
            <div className="c3-grid">
              <div>
                98.34<sub> &#176;C </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Turbine Journal Bearing Temp : DE</div>
            <div className="c3-grid">
              <div>
                45<sub> &#176;C </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Compressor Thrust Bearing Temp</div>
            <div className="c3-grid">
              <div>
                98.34<sub> &#176;C </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Compressor Thrust Bearing Temp</div>
            <div className="c3-grid">
              <div>
                45<sub> &#176;C </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Compressor Journal Bearing Temp</div>
            <div className="c3-grid">
              <div>
                98.34<sub> &#176;C </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>Compressor Journal Bearing Temp</div>
            <div className="c3-grid">
              <div>
                45<sub> &#176;C </sub>
              </div>
              <div className="graph-img">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Griditem;
