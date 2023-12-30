import { combineReducers } from "redux";
import folderReducer from "../features/FileOperations/folderSlice";
import fileListReducer from "../features/FileOperations/fileListSlice";

const rootReducer = combineReducers({
  fileList: fileListReducer,
  folder: folderReducer,
});

export default rootReducer;
