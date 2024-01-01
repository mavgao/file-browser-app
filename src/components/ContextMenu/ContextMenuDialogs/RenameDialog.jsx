import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setRenameDialogVisible } from "../../../features/FileOperations/contextMenuSlice";
import { useState } from "react";
import { renameFolderList } from "../../../features/FileOperations/folderSlice";
import { refreshFileList } from "../../../features/FileOperations/fileListSlice";

export default function RenameDialog() {
  const [value, setValue] = useState("");
  const open = useSelector((state) => state.contextMenu.renameDialogVisible);
  const selectedFolders = useSelector((state) => state.folder.selectedFolders);
  const path = useSelector((state) => state.folder.currentPath);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setRenameDialogVisible(false));
  };
  const handleChange = (event) => {
    setValue(event.currentTarget.form.querySelector("input").value);
  };
  const handleSave = (event) => {
    event.preventDefault();
    const originalName =
      selectedFolders.length > 0
        ? selectedFolders[selectedFolders.length - 1].name
        : "";
    const newName = value;
    const newPath = path.join("/") + "/" + newName;
    dispatch(
      renameFolderList({
        path: path.join("/"),
        newPath: newPath,
        originalName: originalName,
        newName: newName,
      })
    );
    dispatch(refreshFileList(path));
    handleClose();
  };

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
            onChange={handleChange}
            value={value}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" type="button">
            Cancel
          </Button>
          <Button color="primary" type="submit" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
