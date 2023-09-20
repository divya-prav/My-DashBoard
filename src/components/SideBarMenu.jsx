import Button from "@mui/material/Button";
import { SvgIcon, Typography } from "@mui/material";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { Paper } from "@mui/material";
import { Collapse } from "@mui/material";

export default function SideBarMenu(props) {
  const [showMenu, setShowMenu] = useState(true);
  const [showDash, setShowDash] = useState(null);
  console.log(props);

  const paperStyles = {
    backgroundColor: "#F0F0F0",
    height: "75vh",
    padding: "30px",
  };

  const buttonStyles = {
    padding: "0px",
    margin: "0px",
  };

  const menuStyles = {
    margin: "50px 10px",
  };

  return (
    <Paper
      style={{ backgroundColor: "#F0F0F0", borderRadius: "10px" }}
      elevation={0}
    >
      <Button onClick={() => setShowMenu(!showMenu)} style={buttonStyles}>
        {showMenu ? (
          <MenuIcon style={menuStyles} fontSize="medium"></MenuIcon>
        ) : (
          <MenuOpenIcon style={menuStyles}></MenuOpenIcon>
        )}
      </Button>

      <Collapse
        in={!showMenu}
        style={{ backgroundColor: "#F0F0F0" }}
      ></Collapse>

      <Collapse in={showMenu}>
        <Paper elevation={0} variant="elevation" style={paperStyles}>
          <Typography variant="h4" style={menuStyles}>
            The King's Restaurant
            <Typography variant="subtitle2" color="green">
              Dashboard Owner
            </Typography>
          </Typography>

          <Button onClick={() =>props.setShowDashboard(!showDash)}>
            <SvgIcon color="disabled" style={{ padding: "10px" }}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>{" "}
            My DashBoard
          </Button>
          <Button onClick={() =>props.setShowDashboard(null)}>
            <HelpOutlineRoundedIcon
              fontSize="small"
              color="disabled"
              style={{ padding: "10px" }}
            ></HelpOutlineRoundedIcon>
            FAQ'S Page
          </Button>
        </Paper>
      </Collapse>
    </Paper>
  );
}
