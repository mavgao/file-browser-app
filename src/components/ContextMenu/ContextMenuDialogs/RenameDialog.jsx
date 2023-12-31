import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

export default function RenameDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-create-folder"
      fullWidth={true}
      maxWidth={"sm"}
    >
      <form>
        <DialogTitle id="form-dialog-create-folder">Rename</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            label="Item name"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" type="button">
            Cancel
          </Button>
          <Button
            color="primary"
            type="submit"
            onClick={this.handleSave.bind(this)}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
