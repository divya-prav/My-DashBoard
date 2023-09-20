import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Paper
} from "@mui/material";
import { mockGeographyData } from "../mock-data/mockdata";
import { useState } from "react";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function RevenueGenerated() {
  const [country, setCountry] = useState(null);

  const boxStyle = {
    width: 450,
    height: 200,
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#F9F5F6",
    alignContent:'center',
    

  };

  const handleSelect = (e) => {
    setCountry(mockGeographyDataMap[e.target.value])
  };

  let mockGeographyDataMap = mockGeographyData.reduce(function (map, obj) {
    map[obj.id] = obj.value;
    return map;
  }, {});

  return (
    <Paper sx={boxStyle}  elevation={2}>
      <Typography variant="h6" align="center" style={{borderBottom:'1px solid gray',padding:'5px'}}>
        <MonetizationOnIcon fontSize="small" style={{paddingRight:'40px'}}></MonetizationOnIcon>
        Revenue Generated</Typography>
      <FormControl sx={{ m: 1, minWidth: 120,padding:'10px' }}>
        <InputLabel id="country">Country</InputLabel>
        <Select labelId="country" onChange={handleSelect}>
          {mockGeographyData.map((data) => {
            return <MenuItem key={data.id} value={data.id}> {data.id}</MenuItem>
            
          })}
        </Select>
        <FormHelperText>Select Country to see Revenue</FormHelperText>
      </FormControl>
    {country && <Typography variant="h6" color='green' style={{padding:'10px'}}>Total Revenue : ${country}</Typography>}
    </Paper>
  );
}
