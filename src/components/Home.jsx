
 import { Container, Typography } from "@mui/material";
 import SideBarMenu from "./SideBarMenu";
 
 


export default function Home(props){
    console.log(props.setShowDashboard)

return(
    <div>
        <Container style={{ width: "25vw", float: "left" }}>
        <SideBarMenu setShowDashboard={props.setShowDashboard}/>
      </Container>
    </div>
)

}