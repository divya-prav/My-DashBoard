import { BarChart } from "@mui/x-charts";
import { mockBarData } from "../mock-data/mockdata";
import { Typography,Paper } from "@mui/material";
import InsertChartIcon from '@mui/icons-material/InsertChart';

export default function BarChartDiagram() {
  let country = [];
  country = mockBarData.map((data) => data.country);
  let donut = [];
  donut = mockBarData.map((data) => data.donut);
  let burger = [];
  burger = mockBarData.map((data) => data.burger);
  let kebab = [];
  kebab = mockBarData.map((data) => data.kebab);

  const divStyles={
    backgroundColor : "#F9F5F6",
    padding:'10px',
    marginTop:'10px',
    borderRadius:'10px',
    

  }

  return (
    <Paper style={divStyles} elevation={2}>
       
       <Typography variant="h6" align="center" style={{borderBottom:'1px solid gray'}}>
       <InsertChartIcon fontSize="small" style={{paddingRight:'40px'}}></InsertChartIcon>
        Sales by Country</Typography>
      <BarChart
        dataset={mockBarData}
        xAxis={[{scaleType:'band',data:country}]}
        series={[
            {dataKey:'donut',label:'Donut'},
            {dataKey:'burger',label:'Burger'},
            {dataKey:'kebab',label:'Kebab'}
        ]}
        width={600}
        height={300}
    
        />
    </Paper>
  );
}
