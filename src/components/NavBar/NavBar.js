import React, { useState } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RestartAlt } from "@mui/icons-material";
import { AlertDialog } from "../Dialog";

export const NavBar = ({ onReset }) => {
  const title = "Bi-BINGO ka na, Friend!";
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    handleClose();
    onReset();
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="upload picture"
            component="span"
            onClick={handleClickOpen}
          >
            <RestartAlt />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AlertDialog open={open} onClose={handleClose} onSuccess={handleReset} />
    </Box>
  );
};
