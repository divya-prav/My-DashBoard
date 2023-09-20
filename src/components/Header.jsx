import { Paper, Typography } from "@mui/material";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';


export default function Header(){

   const paperStyles ={
    height:200,
    margin:'10px 5px',
    padding:'10px',
    backgroundColor:'#F0F0F0',
    borderRadius:'10px'
   }

    return(
        <Paper style={paperStyles} elevation={0}>
            <DinnerDiningIcon fontSize="large"></DinnerDiningIcon>
            <Typography variant='h4'style={{paddingTop:'40px'}}>DASHBOARD</Typography>
            <Typography variant='subtitle2'>Welcome to your dashboard</Typography>
        </Paper>
    )
}