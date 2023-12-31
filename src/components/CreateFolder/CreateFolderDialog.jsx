import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  hideCreateFolderDialog,
  createNewFolder,
  setFolderList,
} from "../../features/FileOperations/folderSlice";

export default function CreateFolderDialog() {
  const { open, path } = useSelector((state) => ({
    open: state.folder.isCreateFolderDialogOpen,
    path: state.folder.currentPath,
  }));
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideCreateFolderDialog());
  };
  const handleSave = (event) => {
    event.preventDefault();
    const folderName = event.currentTarget.form.querySelector("input").value;
    dispatch(createNewFolder(folderName));
    dispatch(
      // setFileList({ name: folderName, path: path.join("/"), type: "dir" })
      setFolderList({ name: folderName, path: path.join("/"), type: "dir" })
    );
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"sm"}>
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
          <Button onClick={handleSave} color="primary" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
