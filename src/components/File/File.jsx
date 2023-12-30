import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import { useDispatch, useSelector } from "react-redux";
import {
  refreshFileList,
  setFileList,
  setSelectedFile,
} from "../../features/FileOperations/fileListSlice";
import { blue } from "@mui/material/colors";
import {
  navigateToDir,
  refreshFolderList,
  setCurrentPath,
} from "../../features/FileOperations/folderSlice";

export default function File({ type, name }) {
  const path = useSelector((state) => state.folder.currentPath);
  const isSelected = useSelector((state) => {
    const index = state.fileList.selectedFiles.findIndex(
      (f) => f.name === name
    );
    const selectedFiles = state.fileList.selectedFiles;
    return selectedFiles.length > 0 && index === selectedFiles.length - 1;
  });
  const avatarStyle = {
    backgroundColor: isSelected ? blue["A200"] : null,
  };
  const dispatch = useDispatch();
  function handleClick(event) {
    event.stopPropagation();
    dispatch(setSelectedFile({ type: type, name: name }));
  }
  function handleDoubleClick() {
    const newPath = [...path, name];
    dispatch(setCurrentPath(newPath));
    dispatch(refreshFolderList(newPath));
  }
  function handleContextMenu() {}

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
