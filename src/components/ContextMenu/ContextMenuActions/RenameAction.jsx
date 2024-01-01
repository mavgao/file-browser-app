import WrapTextIcon from "@mui/icons-material/WrapText";
import { ListItemIcon, MenuItem, Typography } from "@mui/material";
import { setRenameDialogVisible } from "../../../features/FileOperations/contextMenuSlice";
import { useDispatch } from "react-redux";

export default function RenameAction({ handleClose }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setRenameDialogVisible(true));
    handleClose();
  };

  return (
    <MenuItem onClick={handleClick}>
      <ListItemIcon>
        <WrapTextIcon />
      </ListItemIcon>
      <Typography variant="inherit">Rename</Typography>
    </MenuItem>
  );
}
