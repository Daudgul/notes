import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function PopUp({ open, setOpen, setUser, user }) {
  const [error, setError] = React.useState(false);

  const handleClose = () => {
    if (user.length >= 1) {
      return setOpen(false);
    } else {
      return setError(true);
    }
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>User</DialogTitle>
        <DialogContent>
          <DialogContentText>Create your username</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUser(e.target.value)}
            error={error}
            helperText={error ? "Empty field!" : " "}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
