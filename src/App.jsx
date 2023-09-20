import "./App.css";
import SideBarMenu from "./components/SideBarMenu";
import RecentTransaction from "./components/RecentTransaction";
import Grid from "@mui/material/Unstable_Grid2";
import RevenueGenerated from "./components/RevenueGenerated";
import BarChart from "./components/BarChartDiagram";
import { Container, Paper } from "@mui/material";
import Header from "./components/Header";

function App() {

  const paperStyles = {
    padding:'20px',
    backgroundColor:'#F0F0F0'
  }

  return (
    <Paper variant="elevation" elevation={0} style={paperStyles}>
      <Container style={{ width: "25vw", float: "left" }}>
        <SideBarMenu />
      </Container>
      <Grid container spacing={0} columnSpacing={3}>
        <Grid item xs={12}>
         <Header/>
        </Grid>
        <Grid item xs={6}>
          <RecentTransaction />
        </Grid>
        <Grid item xs={6}>
          <RevenueGenerated />
        </Grid>
        <Grid item xs={2}>

        </Grid>

        <Grid item xs={8}>
          <BarChart />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
