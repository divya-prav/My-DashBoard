import "./App.css";
import { Paper } from "@mui/material";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import FAQ from "./components/FAQ";
import { useState } from "react";

function App() {
  const [showDashboard,setShowDashboard] = useState(true);

  const paperStyles = {
    padding: "20px",
    backgroundColor: "#F0F0F0",
  };

  return (
    <Paper variant="elevation" elevation={0} style={paperStyles}>
      <Home setShowDashboard={setShowDashboard}/>
      {showDashboard ? 
      <DashBoard showDashboard={showDashboard} setShowDashboard={setShowDashboard}/> :
      <FAQ  showDashboard={showDashboard} setShowDashboard={setShowDashboard}/>}
    </Paper>
  );
}

export default App;
