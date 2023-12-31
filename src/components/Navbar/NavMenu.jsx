import { MoreVertOutlined } from "@mui/icons-material";
import { Menu } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import CreateFolderAction from "../CreateFolder/CreateFolderAction";
import UploadFileAction from "../ContextMenu/ContextMenuActions/UploadFileAction";

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
        <UploadFileAction handleClose={handleClose} />
      </Menu>
    </div>
  );
}
