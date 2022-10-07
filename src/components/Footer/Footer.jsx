import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <>
      <Box
        style={{ backgroundColor: "grey", opacity: "70%" }}
        sx={{ p: 6 }}
        component="footer"
      >
        <Typography
          style={{ opacity: "100%" }}
          variant="h6"
          align="center"
          gutterBottom
        >
          Thank you for your attantion
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
