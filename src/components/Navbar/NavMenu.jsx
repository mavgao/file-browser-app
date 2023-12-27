import { CloudUploadOutlined, MoreVertOutlined } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import CreateFolderAction from "../CreateFolder/CreateFolderAction";

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div style={{ marginLeft: "1em" }}>
      <IconButton color="inherit" onClick={handleClick}>
        <MoreVertOutlined />
      </IconButton>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CreateFolderAction handleClose={handleClose} />
        <MenuItem onClick={handleClick}>
          <ListItemIcon>
            <CloudUploadOutlined />
          </ListItemIcon>
          <Typography variant="inherit">Upload Files</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
