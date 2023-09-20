import RecentTransaction from "./RecentTransaction";
import RevenueGenerated from "./RevenueGenerated";
import BarChartDiagram from "./BarChartDiagram";
import Header from "./Header";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

export default function DashBoard(props) {
  
    

  return (
    <>
    
      <Grid container spacing={0} columnSpacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={6}>
          <RecentTransaction />
        </Grid>
        <Grid item xs={6}>
          <RevenueGenerated />
        </Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          <BarChartDiagram />
        </Grid>
      </Grid>
     
    </>
  );
}
