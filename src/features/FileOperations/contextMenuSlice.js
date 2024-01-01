import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contextMenuVisible: false,
  contextMenuPosition: [],
  uploadFileDialogVisible: false,
  renameDialogVisible: false,
  copyDialogVisible: false,
};

const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    setContextMenuVisible: (state, action) => {
      state.contextMenuVisible = !!action.payload;
    },
    setContextMenuPosition: (state, action) => {
      state.contextMenuPosition = action.payload;
    },
    setUploadFileDialogVisible: (state, action) => {
      state.uploadFileDialogVisible = !!action.payload;
    },
    setRenameDialogVisible: (state, action) => {
      state.renameDialogVisible = !!action.payload;
    },
    setCopyDialogVisible: (state, action) => {
      state.copyDialogVisible = !!action.payload;
    },
  },
});

export const {
  setContextMenuVisible,
  setContextMenuPosition,
  setUploadFileDialogVisible,
  setRenameDialogVisible,
  setCopyDialogVisible,
} = contextMenuSlice.actions;

export default contextMenuSlice.reducer;
