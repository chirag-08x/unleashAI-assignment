import { Paper, Grid2 } from "@mui/material";
import { clientCardsData } from "../../data/data";

const ClientCards = () => {
  return (
    <Grid2 container justifyContent="center" spacing={{ xs: 1.5, sm: 2 }}>
      {clientCardsData.map(({ id, img }) => {
        return (
          <Paper
            key={id}
            sx={{ border: "1px solid #cccccc94", boxShadow: 0, px: 1 }}
          >
            <img src={img} alt="" />
          </Paper>
        );
      })}
    </Grid2>
  );
};

export default ClientCards;
