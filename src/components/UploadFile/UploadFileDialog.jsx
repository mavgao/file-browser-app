import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import FileUploader from "./FileUploader";
import { useDispatch, useSelector } from "react-redux";
import { hideUploadFileDialog } from "../../features/FileOperations/contextMenuSlice";
import { setFolderList } from "../../features/FileOperations/folderSlice";
import { refreshFileList } from "../../features/FileOperations/fileListSlice";

export default function UploadFileDialog() {
  const { open, path } = useSelector((state) => ({
    open: state.contextMenu.uploadFileDialogVisible,
    path: state.folder.currentPath,
  }));
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideUploadFileDialog());
  };
  const handleUpload = (event) => {
    event.preventDefault();
    const files =
      event.currentTarget.form.querySelector("input[type=file]").files;
    const file = files[0];
    dispatch(setFolderList({ name: file.name, type: file.type, path: path }));
    dispatch(refreshFileList(path));
    dispatch(hideUploadFileDialog());
  };
  //   const handleSelectedFiles = (event) => {
  //     dispatch(
  //       setFileUploadList(
  //         [...event.target.files].map((f) => ({ name: f.name, type: f.type }))
  //       )
  //     );
  //   };
  //   const handleReset = (event) => {
  //     dispatch(setFileUploadList([]));
  //   };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-upload"
      fullWidth={true}
      maxWidth={"sm"}
    >
      <form>
        <DialogTitle id="form-dialog-upload">Upload files</DialogTitle>
        <DialogContent>
          <FileUploader
          // handleUpload={handleUpload}
          // uploadFiles={uploadedFiles}
          // handleSelectedFiles={handleSelectedFiles}
          // handleReset={handleReset}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" type="button">
            Cancel
          </Button>
          <Button color="primary" onClick={handleUpload} type="submit">
            Upload
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
