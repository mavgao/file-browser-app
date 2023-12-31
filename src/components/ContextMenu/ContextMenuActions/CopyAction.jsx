import { ListItemIcon, MenuItem, Typography } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

export default function CopyAction({ handleClick, selectedFile }) {
  return (
    <MenuItem onClick={(e) => handleClick(e, selectedFile)}>
      <ListItemIcon>
        <FileCopyIcon />
      </ListItemIcon>
      <Typography variant="inherit">Copy</Typography>
    </MenuItem>
  );
}
