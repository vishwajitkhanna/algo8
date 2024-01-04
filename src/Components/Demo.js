import * as React from "react";
import "./Demo.css";
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={5}>
          <Contmain />
        </Grid>
        <Grid container xs={12} md={6} lg={7} spacing={2}>
          <Grid xs={6} lg={3}>
            <Item>
              <Box id="category-a" sx={{ fontSize: "12px" }}>
                <div className="top-grid">
                  <div>
                    <div>Health</div>
                    <div className="inside-grid">
                      <div>
                        98.34<sub> % </sub>
                      </div>
                      <div className="graph-img">
                        <img src={graph} alt="" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div>Time to Failure</div>
                    <div className="inside-grid">
                      <div>
                        44<sub> Weeks </sub>
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
          <Grid xs={6} lg={3}>
            <Item>
              <Box id="category-b" sx={{ fontSize: "12px" }}>
                <div className="top-grid">
                  <div>
                    <div>Efficiency</div>
                    <div className="inside-grid">
                      <div>
                        98.34<sub> % </sub>
                      </div>
                      <div className="graph-img">
                        <img src={graph} alt="" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div>Power Consumption</div>
                    <div className="inside-grid">
                      <div>
                        45<sub> MW </sub>
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
          <Grid xs={6} lg={3}>
            <Item>
              <Box id="category-c" sx={{ fontSize: "12px" }}>
                <div className="top-grid">
                  <div>
                    <div>Steam Consumption</div>
                    <div className="inside-grid">
                      <div>
                        98.34<sub> T/hr </sub>
                      </div>
                      <div className="graph-img">
                        <img src={graph} alt="" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div>Interstage Cooler Temp.</div>
                    <div className="inside-grid">
                      <div>
                        98.34<sub> &#176;C </sub>
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
          <Grid xs={6} lg={3}>
            <Item>
              <Box id="category-d" sx={{ fontSize: "12px" }}>
                <div className="top-grid">
                  <div>
                    <div>Wet Gas Flow</div>
                    <div className="inside-grid">
                      <div>
                        98.34<sub> T/hr </sub>
                      </div>
                      <div className="graph-img">
                        <img src={graph} alt="" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div>Suction Pressure</div>
                    <div className="inside-grid">
                      <div>
                        98.34
                        <sub>
                          {" "}
                          kg/cm<sup>2</sup>{" "}
                        </sub>
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
          <Grid container xs={12} md={12} lg={12} spacing={0}>
            <Griditem />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
