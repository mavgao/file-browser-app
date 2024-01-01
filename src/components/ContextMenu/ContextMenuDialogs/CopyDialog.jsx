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
import { copyItem } from "../../../features/FileOperations/folderSlice";
import { useEffect, useState } from "react";

export default function CopyDialog() {
  const open = useSelector((state) => state.contextMenu.copyDialogVisible);
  let path = useSelector((state) => state.folder.currentPath);
  const [lastPath, setLastPath] = useState(path);
  useEffect(() => {
    setLastPath(path);
  }, [path]);
  const selectedFile = useSelector((state) => state.folder.selectedFolders);
  const handleGoBack = () => {
    setLastPath((prevPath) => prevPath.slice(0, -1));
  };
  const dispatch = useDispatch();
  const handleSave = (event) => {
    event.preventDefault();
    dispatch(
      copyItem({
        selectedFile: selectedFile,
        prevPath: path.slice(0, -1).join("/"),
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
          Copy files to{" "}
          <small style={{ color: "grey" }}>{lastPath.join("/")}</small>
        </DialogTitle>
        {/* <DialogContent><FileListSublist /></DialogContent> */}
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
