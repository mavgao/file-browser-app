import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreateFolderDialogOpen: false,
};

export const createFolderSlice = createSlice({
  name: "createFolder",
  initialState,
  reducers: {
    showCreateFolderDialog: (state) => {
      state.isCreateFolderDialogOpen = true;
    },
    hideCreateFolderDialog: (state) => {
      state.isCreateFolderDialogOpen = false;
    },
  },
});

export const { showCreateFolderDialog, hideCreateFolderDialog } =
  createFolderSlice.actions;

export default createFolderSlice.reducer;
