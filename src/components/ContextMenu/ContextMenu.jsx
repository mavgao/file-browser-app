import { Menu } from "@mui/material";
import CopyAction from "./ContextMenuActions/CopyAction";
import RenameAction from "./ContextMenuActions/RenameAction";
import { useDispatch, useSelector } from "react-redux";
import { setContextMenuVisible } from "../../features/FileOperations/contextMenuSlice";
import RemoveAction from "./ContextMenuActions/RemoveAction";

export default function ContextMenu() {
  const { open, position, path } = useSelector((state) => ({
    open: state.contextMenu.contextMenuVisible,
    position: state.contextMenu.contextMenuPosition,
    path: state.folder.currentPath,
  }));
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(setContextMenuVisible(false));
  }

  return (
    <Menu
      anchorReference="anchorPosition"
      anchorPosition={{ top: position[1], left: position[0] }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={open}
      onClose={handleClose}
    >
      {path.join("/") === "/" ? (
        <RenameAction handleClose={handleClose}></RenameAction>
      ) : (
        <div>
          <CopyAction handleClose={handleClose}></CopyAction>
          <RenameAction handleClose={handleClose}></RenameAction>
          <RemoveAction handleClose={handleClose}></RemoveAction>
        </div>
      )}
    </Menu>
  );
}
