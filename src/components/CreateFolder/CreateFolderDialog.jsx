import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideCreateFolderDialog } from "../../features/FileOperations/createFolderSlice";

export default function CreateFolderDialog() {
  const open = useSelector(
    (state) => state.createFolder.isCreateFolderDialogOpen
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideCreateFolderDialog());
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <form>
        <DialogTitle>Create Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            label="Folder name"
            type="text"
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" type="button">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
