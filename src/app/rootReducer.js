import { combineReducers } from "redux";
import fileListReducer from "../features/FileOperations/fileListSlice";
import createFolderReducer from "../features/FileOperations/createFolderSlice";

const rootReducer = combineReducers({
  fileList: fileListReducer,
  createFolder: createFolderReducer,
});

export default rootReducer;
