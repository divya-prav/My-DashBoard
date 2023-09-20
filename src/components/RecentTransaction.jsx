import {
  List,
  ListItem,
  ListSubheader,
  Paper,
  Typography,
  Divider
} from "@mui/material";
import { mockTransactions } from "../mock-data/mockdata";
import PaidIcon from '@mui/icons-material/Paid';

export default function RecentTransaction() {
  const line = {
    borderBottom: "1px solid gray",
    padding: "5px",
  };

  return (
    <Paper
      elevation={2}
      style={{
        maxHeight: 200,
        maxWidth: 450,
        backgroundColor: "#F9F5F6",
        padding: "10px",
        overflow: "auto",
      }}
    >
      <Typography variant="h6" align="center" style={line}>
        <PaidIcon fontSize="small" style={{paddingRight:'40px'}}></PaidIcon>  Recent Transaction
        
      </Typography>
      <List>
        <ListSubheader></ListSubheader>
        {mockTransactions.map((transaction) => {
          return (
            <ListItem key={transaction.txId}>
              <ListItem style={{ display: "inline-block" }}>
                <Typography variant="subtitle1" color="green">
                  {transaction.txId}
                </Typography>
                <Typography variant="subtitle2">{transaction.user}</Typography>
              </ListItem>
              
              <ListItem >
                <Typography variant="subtitle2">{transaction.date}</Typography>
              </ListItem>

              <ListItem >
                <Typography variant="subtitle1" color='green'>${transaction.cost}</Typography>
              </ListItem>
              
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
