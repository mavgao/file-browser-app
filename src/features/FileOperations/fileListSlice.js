import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileList: [{ name: "root-folder", path: "/", type: "dir" }],
  selectedFiles: [],
  filteredFileList: [],
};

const fileListSlice = createSlice({
  name: "fileList",
  initialState,
  reducers: {
    createFile: (state, action) => {},
    setSelectedFile: (state, action) => {
      const selectedFileExists = state.selectedFiles.some(
        (f) => f.name === action.payload.name
      );
      if (!selectedFileExists) {
        state.selectedFiles.push(action.payload);
      }
    },
    setFileList: (state, action) => {
      state.fileList.push(action.payload);
    },
    refreshFileList: (state, action) => {
      state.selectedFiles = [];
      state.filteredFileList = state.fileList.filter((fl) => {
        return fl.path === action.payload.join("/");
      });
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(incrementBy, (state, action) => {});
  // },
});

export const { setSelectedFile, createFile, setFileList, refreshFileList } =
  fileListSlice.actions;

export default fileListSlice.reducer;
