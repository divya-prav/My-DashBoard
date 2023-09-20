import Button from "@mui/material/Button";

import { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SideBarItem from "./SideBarItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Paper } from "@mui/material";
import {Collapse} from "@mui/material";



export default function SideBarMenu() {
  const [showMenu, setShowMenu] = useState(true);

  const paperStyles = {
    backgroundColor: "#F0F0F0",
    height:'75vh',
    padding: "30px",
  };

  const buttonStyles = {
   
    padding:'0px',
    margin:'0px'
  };


  const menuStyles = {
    margin: "50px 10px",
  };

  
  

  return (
    <Paper style={{backgroundColor:"#F0F0F0",borderRadius:'10px'}} elevation={0}>
      
      <Button 
      onClick={() => setShowMenu(!showMenu)}
       style={buttonStyles}
       >
        {showMenu ? (
          <MenuIcon style={menuStyles} fontSize="medium"></MenuIcon>
        ) : (
          <MenuOpenIcon style={menuStyles}></MenuOpenIcon>
        )}
      </Button>
    
        <Collapse in={!showMenu} style={{backgroundColor:"#F0F0F0"}}></Collapse>

        <Collapse in={showMenu}>
        <Paper elevation={0} variant="elevation" style={paperStyles}>
        <SideBarItem/>
        </Paper>
        </Collapse>
       
     
      
    </Paper>
  );
}
