import * as React from "react";
import "./Maingrid.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Contmain from "./Contmain";
import graph from "../Logo/graph.png";
import Griditem from "./Griditem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  let data = [
    {
      name1: "Health",
      number1: 98.34,
      deg1: "%",
      name2: "Time to Failure",
      desc: "(in next 30 days)",
      number2: 44,
      deg2: "Weeks",
    },
    {
      name1: "Efficiency",
      number1: 98.34,
      deg1: "%",
      name2: "Power Consumption",
      desc: "",
      number2: 45,
      deg2: "MW",
    },
    {
      name1: "Steam Consumption",
      number1: 98.34,
      deg1: "T/hr",
      name2: "Interstage Cooler Temp.",
      desc: "",
      number2: 98.34,
      deg2: "Kg/cm",
    },
    {
      name1: "Wet Gas Flow",
      number1: 98.34,
      deg1: "T/hr",
      name2: "Suction Pressure",
      desc: "",
      number2: 98.34,
      deg2: "kg/cm",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={4}>
          <Contmain />
        </Grid>
        <Grid container xs={12} md={6} lg={8} spacing={2}>
          {data.map((item) => {
            return (
              <Grid xs={6} lg={3}>
                <Item>
                  <Box id="category-a" sx={{ fontSize: "12px" }}>
                    <div className="top-grid">
                      <div>
                        <div>{item.name1}</div>
                        <div className="inside-grid">
                          <div>
                            {item.number1}
                            <sub> {item.deg1} </sub>
                          </div>
                          <div className="graph-img">
                            <img src={graph} alt="" />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <div>
                          {item.name2}
                          <sub>{item.desc}</sub>
                        </div>
                        <div className="inside-grid">
                          <div>
                            {item.number2}
                            <sub> {item.deg2} </sub>
                          </div>
                          <div className="graph-img">
                            <img src={graph} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Item>
              </Grid>
            );
          })}

          <Grid container xs={12} md={12} lg={12} spacing={0}>
            <Griditem />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
