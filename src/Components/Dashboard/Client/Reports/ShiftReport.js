import React from "react";
import Drawer from "../../../Layout/Drawer/Drawer";
import Grid from "@mui/material/Grid";
import "./Reports.css";
import print from "./images/print.png";
import download from "./images/download.png";

const ShiftReport = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <section className="drawer-parent-container">
        <Drawer />
      </section>
      <section className="dash-content-parent">
        <Grid container spacing={2} className="GRid_parent_table">
          <Grid xs={6}>
            <span className="heading">
              ShiftDate <input type="date" style={{ marginLeft: "10px" }} />
              <hr />
              <br></br>
              <table style={{ width: "100%" }}>
                <tr>
                  <td>SCRATCHER SALES</td>
                  <td className="tableRow">001</td>
                </tr>
                <tr>
                  <td> LOTTO SALES</td>
                  <td className="tableRow">002</td>
                </tr>
                <tr>
                  <td> TOTAL SALES</td>
                  <td className="tableRow">003</td>
                </tr>
              </table>
            </span>
          </Grid>
          <Grid xs={6}>
            <span className="heading">
              ShiftNumber
              <span className ="icons_parent">
                <img className ="icons" src={print} alt="print"></img>
                <img className ="icons" src={download} alt="download"></img>
              </span>
              <hr style={{ marginTop: "10px" }} />
              <br></br>
              <table style={{ width: "100%" }}>
                <tr>
                  <td>SCRATCHER SALES</td>
                  <td className="tableRow">001</td>
                </tr>
                <tr>
                  <td> LOTTO SALES</td>
                  <td className="tableRow">002</td>
                </tr>
                <tr>
                  <td> TOTAL SALES</td>
                  <td className="tableRow">003</td>
                </tr>
              </table>
            </span>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default ShiftReport;
