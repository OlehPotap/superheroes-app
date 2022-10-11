import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import Form from "../Form/Form.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalUnit = ({ modalOptions, closeModal }) => {
  return (
    <Modal
      open={modalOptions.isOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Form
          isEditing={modalOptions.isEditing}
          superheroEditInfo={modalOptions.card}
        />
      </Box>
    </Modal>
  );
};

export default ModalUnit;
