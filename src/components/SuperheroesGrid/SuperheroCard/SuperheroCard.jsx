import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { removeHero } from "../../../redux/operations";
import defaultImg from "../../../additional/Screenshot_8.png";
import SuperheroModalUnit from "./SuperheroModalUnit/SuperheroModalUnit";

const SuperheroCard = ({ card, openModal }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleDeleteCard = () => {
    dispatch(removeHero(card._id));
  };
  const handleEdit = () => {
    openModal(card);
  };
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          style={{ paddingTop: "0", height: "400px", objectFit: "cover" }}
          component="img"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={card.images.length > 0 ? card.images[0] : defaultImg}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.nickname}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">
            View
          </Button>
          <Button onClick={handleEdit} size="small">
            Edit
          </Button>
          <Button onClick={handleDeleteCard} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
      <SuperheroModalUnit handleClose={handleClose} open={open} card={card} />
    </Grid>
  );
};

export default SuperheroCard;
