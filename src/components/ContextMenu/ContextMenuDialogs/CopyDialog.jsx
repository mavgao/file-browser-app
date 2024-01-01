import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useDispatch, useSelector } from "react-redux";
import { setCopyDialogVisible } from "../../../features/FileOperations/contextMenuSlice";
import { refreshFileList } from "../../../features/FileOperations/fileListSlice";
import { copyItem } from "../../../features/FileOperations/folderSlice";

export default function CopyDialog() {
  const open = useSelector((state) => state.contextMenu.copyDialogVisible);
  const path = useSelector((state) => state.folder.currentPath);
  const selectedFile = useSelector((state) => state.folder.selectedFolders);
  const folders = useSelector((state) => {
    return state.folder.folders;
  });
  let prevPath = path.slice(0, -1);
  function handleGoBack() {
    prevPath = prevPath.slice(0, -1);
  }
  const dispatch = useDispatch();
  const handleSave = (event) => {
    event.preventDefault();
    dispatch(
      copyItem({
        selectedFile: selectedFile,
        prevPath: prevPath.join("/"),
      })
    );
    handleClose();
  };
  const handleClose = () => {
    dispatch(setCopyDialogVisible(false));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-copy"
      fullWidth={true}
      maxWidth={"sm"}
    >
      <form>
        <DialogTitle id="form-dialog-copy">
          Copy files to <small style={{ color: "grey" }}>{prevPath}</small>
        </DialogTitle>
        <DialogContent>{/* <FileListSublist /> */}</DialogContent>
        <DialogActions>
          <Button
            onClick={handleGoBack}
            color="primary"
            type="button"
            // disabled={!canGoBack}
          >
            <KeyboardArrowLeftIcon /> Go back directory
          </Button>

          <Button onClick={handleClose} color="primary" type="button">
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave} type="submit">
            Copy
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
