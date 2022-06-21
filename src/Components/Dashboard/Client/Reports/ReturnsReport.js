import React from "react";
import Drawer from "../../../Layout/Drawer/Drawer";
import Grid from "@mui/material/Grid";
import "./Reports.css";
import Print from "./images/print.png";
import Download from "./images/download.png";
import Table from './Table';


const ReturnsReport = () => {
    return <div style={{ display: "flex", width: "100%" }}>
        <section className="drawer-parent-container">
            <Drawer />
        </section>
        <section className="dash-content-parent">
            <Grid container spacing={2} className="GRid_parent_table">
                <Grid xs={4}>
                    <section className="shift-date-parent grid-parent-padding flex-end">
                        <span className="grid-top-head">From</span>
                        <input type='date' />
                    </section>
                </Grid>
                <Grid xs={4}>
                    <section className="shift-date-parent grid-parent-padding flex-end">
                        <span className="grid-top-head">To</span>
                        <input type='date' />
                    </section>
                </Grid>
                <Grid xs={4}>
                    <section className="shift-number-parent grid-parent-padding ">
                        <span className="grid-top-head"></span>
                        <section>
                            <img className="icons" src={Print} />
                            <img className="icons" src={Download} />
                        </section>
                    </section>
                </Grid>
            </Grid>
            <hr />
            <section className="total-amount1">
                <table>
                    <tr>
                        <td style={{ padding: '0px 1.5rem', textDecoration: 'underline' }}>Total Return Quantity</td>
                        <td style={{ padding: '0px 1.5rem' }}>315</td>
                    </tr>
                    <tr style={{ marginTop: '10px', position: 'relative', top: 10 }}>
                        <td style={{ padding: '0px 1.5rem', textDecoration: 'underline' }}>Total Return Amount</td>
                        <td style={{ padding: '0px 1.5rem' }}>15000</td>
                    </tr>
                </table>
            </section>
            <section
                className="table-parent-class" style={{ marginTop: '2rem' }}>
                <Table component='backOfficeReports' />
            </section>
        </section>
    </div>
}
export default ReturnsReport;