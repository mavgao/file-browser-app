import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contextMenuVisible: false,
  contextMenuPosition: [],
  uploadFileDialogVisible: false,
};

const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    hideContextMenu: (state) => {
      state.contextMenuVisible = false;
    },
    setContextMenuVisible: (state, action) => {
      state.contextMenuVisible = !!action.payload;
    },
    setContextMenuPosition: (state, action) => {
      state.contextMenuPosition = action.payload;
    },
    setUploadFileDialogVisible: (state, action) => {
      state.uploadFileDialogVisible = true;
    },
    hideUploadFileDialog: (state, action) => {
      state.uploadFileDialogVisible = false;
    },
  },
});

export const {
  hideContextMenu,
  setContextMenuVisible,
  setContextMenuPosition,
  setUploadFileDialogVisible,
  hideUploadFileDialog,
} = contextMenuSlice.actions;

export default contextMenuSlice.reducer;
