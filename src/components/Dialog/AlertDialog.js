import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
export const AlertDialog = ({ open, onClose, onSuccess }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Reset your BINGO card?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action will clear all your entries. Sayang naman, gurl! :(
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>CANCEL</Button>
        <Button onClick={onSuccess} autoFocus>
          YUP!
        </Button>
      </DialogActions>
    </Dialog>
  );
};
