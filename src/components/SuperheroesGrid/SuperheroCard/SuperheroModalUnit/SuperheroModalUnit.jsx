import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Gallery from "./HeroFullCadr/HeroFullCard";

const style = {
  overflow: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 767,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "96vh",
};

const SuperheroModalUnit = ({ handleClose, open, card }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Gallery images={card.images} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {card.nickname}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Real name: ${card.real_name}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Origin description: ${card.origin_description}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Catch phrase: ${card.catch_phrase}`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SuperheroModalUnit;
