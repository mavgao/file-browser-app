import { combineReducers } from "redux";
import folderReducer from "../features/FileOperations/folderSlice";
import fileListReducer from "../features/FileOperations/fileListSlice";
import contextMenuReducer from "../features/FileOperations/contextMenuSlice";

const rootReducer = combineReducers({
  fileList: fileListReducer,
  folder: folderReducer,
  contextMenu: contextMenuReducer,
});

export default rootReducer;
