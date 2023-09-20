import { SvgIcon, Typography,Button } from "@mui/material";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { useState } from "react";


export default function SideBarItem() {

  const [showDashboard,setShowDashboard] = useState(false);

  const menuStyles = {
    margin: "50px 10px",
  };
  return (
    <div>
      <Typography variant="h4" style={menuStyles}>
        The King's Restaurant
        <Typography variant="subtitle2" color='green'>Dashboard Owner</Typography>
      </Typography>
      
      <Button onClick={()=>setShowDashboard(!showDashboard)}>
        <SvgIcon color="disabled" style={{ padding: "10px" }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>{" "}
        My DashBoard
      </Button>
      <Button >
        <HelpOutlineRoundedIcon
          fontSize="small"
          color="disabled"
          style={{ padding: "10px" }}
        ></HelpOutlineRoundedIcon>
        FAQ'S Page
      </Button>

      
    </div>
  );
}
