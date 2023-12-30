import { ListItemIcon, MenuItem, Typography } from "@mui/material";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { useDispatch } from "react-redux";
import { showCreateFolderDialog } from "../../features/FileOperations/folderSlice";

export default function CreateFolderAction({ handleClose }) {
  const dispatch = useDispatch();
  function handleCreateFolder() {
    dispatch(showCreateFolderDialog());
    handleClose();
  }
  return (
    <MenuItem onClick={handleCreateFolder}>
      <ListItemIcon>
        <CreateNewFolderIcon />
      </ListItemIcon>
      <Typography variant="inherit">Create Folder</Typography>
    </MenuItem>
  );
}
