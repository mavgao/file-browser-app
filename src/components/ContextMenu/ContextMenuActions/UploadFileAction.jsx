import { ListItemIcon, MenuItem, Typography } from "@mui/material";
import { CloudUploadOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setUploadFileDialogVisible } from "../../../features/FileOperations/contextMenuSlice";

export default function UploadFileAction({ handleClose }) {
  const dispatch = useDispatch();
  function handleUploadFile() {
    dispatch(setUploadFileDialogVisible(true));
    handleClose();
  }

  return (
    <MenuItem onClick={handleUploadFile}>
      <ListItemIcon>
        <CloudUploadOutlined />
      </ListItemIcon>
      <Typography variant="inherit">Upload Files</Typography>
    </MenuItem>
  );
}
