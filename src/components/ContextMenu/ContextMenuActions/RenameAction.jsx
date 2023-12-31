import WrapTextIcon from "@mui/icons-material/WrapText";
import { ListItemIcon, MenuItem, Typography } from "@mui/material";

export default function RenameAction({ handleClick, selectedFiles }) {
  return (
    <MenuItem onClick={(e) => handleClick(e, selectedFiles)}>
      <ListItemIcon>
        <WrapTextIcon />
      </ListItemIcon>
      <Typography variant="inherit">Rename</Typography>
    </MenuItem>
  );
}
