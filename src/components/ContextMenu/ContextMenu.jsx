import { Menu } from "@mui/material";
import CopyAction from "./ContextMenuActions/CopyAction";
import RenameAction from "./ContextMenuActions/RenameAction";
import { useDispatch, useSelector } from "react-redux";
import { hideContextMenu } from "../../features/FileOperations/contextMenuSlice";

export default function ContextMenu() {
  const { open, position } = useSelector((state) => ({
    open: state.contextMenu.contextMenuVisible,
    position: state.contextMenu.contextMenuPosition,
  }));
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(hideContextMenu());
  }
  function handleClick() {}

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
      handleClick={handleClick}
    >
      <CopyAction></CopyAction>
      <RenameAction></RenameAction>
    </Menu>
  );
}
