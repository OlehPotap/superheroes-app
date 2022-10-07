import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="h6" color="inherit" noWrap>
          Search for a Hero
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
