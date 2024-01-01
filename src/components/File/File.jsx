import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import { useDispatch, useSelector } from "react-redux";
import { blue } from "@mui/material/colors";
import {
  refreshFolderList,
  setCurrentPath,
  setSelectedFolder,
} from "../../features/FileOperations/folderSlice";
import {
  setContextMenuPosition,
  setContextMenuVisible,
} from "../../features/FileOperations/contextMenuSlice";

export default function File({ type, name }) {
  const path = useSelector((state) => state.folder.currentPath);
  const isSelected = useSelector((state) => {
    const index = state.folder.selectedFolders.findIndex(
      (f) => f.name === name
    );
    const selectedFolders = state.folder.selectedFolders;
    return selectedFolders.length > 0 && index === selectedFolders.length - 1;
  });
  const avatarStyle = {
    backgroundColor: isSelected ? blue["A200"] : null,
  };
  const dispatch = useDispatch();
  function handleClick(event) {
    event.stopPropagation();
    dispatch(setSelectedFolder({ name: name, type: type }));
  }
  function handleDoubleClick() {
    const newPath = [...path, name];
    dispatch(setCurrentPath(newPath));
    dispatch(refreshFolderList(newPath));
  }
  function handleContextMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    const x = event.clientX;
    const y = event.clientY;
    dispatch(setSelectedFolder({ name: name, type: type }));
    dispatch(setContextMenuVisible(true));
    dispatch(setContextMenuPosition([x, y]));
  }

  return (
    <div
      className="File"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handleContextMenu}
      data-selected={isSelected}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar style={avatarStyle}>
            {type === "dir" ? <FolderIcon /> : <ArticleIcon />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="filename" primary={name} />
      </ListItem>
    </div>
  );
}
