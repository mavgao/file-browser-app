import { ListItemIcon, MenuItem, Typography } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useDispatch } from "react-redux";
import { setCopyDialogVisible } from "../../../features/FileOperations/contextMenuSlice";

export default function CopyAction({ handleClose }) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setCopyDialogVisible(true));
    handleClose();
  }

  return (
    <MenuItem onClick={() => handleClick()}>
      <ListItemIcon>
        <FileCopyIcon />
      </ListItemIcon>
      <Typography variant="inherit">Copy</Typography>
    </MenuItem>
  );
}
