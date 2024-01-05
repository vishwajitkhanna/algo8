import React from "react";
import "./Griditem.css";
import graph from "../Logo/graph.png";
import { LineChart } from "@mui/x-charts/LineChart";

const Qwert = () => {
  let data1 = [
    { name: "Turbine Shaft Axial Displ.", number: 98.34 },
    { name: "Compressor Shaft Axial Displ.", number: 45 },
    { name: "Turbine Shaft Vibration - NDE", number: 98.34 },
    { name: "Turbine Shaft Vibration - DE", number: 45 },
    { name: "Compression Shaft Vibration - DE", number: 45 },
    { name: "Compression Shaft Vibration - DE", number: 98.34 },
  ];
  let data2 = [
    { name: "Turbine Thrust Bearing Temp : AS", number: 98.34 },
    { name: "Turbine Thrust Bearing Temp : NAS", number: 45 },
    {
      name: "Turbine Journal Bearing Temp : ND",
      number: 98.34,
    },
    { name: "Turbine Journal Bearing Temp : DE", number: 45 },
    { name: "Compressor Thrust Bearing Temp", number: 98.34 },
    { name: "Compressor Thrust Bearing Temp", number: 45 },
    { name: "Compressor Journal Bearing Temp", number: 98.34 },
    { name: "Compressor Journal Bearing Temp", number: 45 },
  ];
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
          {data1.map((obj) => {
            return (
              <div>
                <div>{obj.name}</div>
                <div className="c3-grid">
                  <div>
                    {obj.number}
                    <sub> &#181;m </sub>
                  </div>
                  <div className="graph-img">
                    <img src={graph} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
          {data2.map((obj) => {
            return (
              <div>
                <div>{obj.name}</div>
                <div className="c3-grid">
                  <div>
                    {obj.number}
                    <sub> &#176;C </sub>
                  </div>
                  <div className="graph-img">
                    <img src={graph} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Qwert;
