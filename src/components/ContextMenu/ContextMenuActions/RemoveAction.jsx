import { DeleteOutline } from "@mui/icons-material";
import { ListItemIcon, MenuItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../features/FileOperations/folderSlice";

export default function RemoveAction() {
  const selectedFile = useSelector((state) => state.folder.selectedFolders);
  const path = useSelector((state) => state.folder.currentPath);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(removeItem({ path: path.join("/"), selectedFile: selectedFile }));
  }

  return (
    <MenuItem onClick={() => handleClick()}>
      <ListItemIcon>
        <DeleteOutline />
      </ListItemIcon>
      <Typography variant="inherit">Remove</Typography>
    </MenuItem>
  );
}
