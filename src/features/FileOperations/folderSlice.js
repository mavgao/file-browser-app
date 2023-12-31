import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreateFolderDialogOpen: false,
  folders: { "root-folder": [] },
  selectedFolders: [],
  filteredFolders: [],
  currentPath: [],
};

export const createFolderSlice = createSlice({
  name: "folderSlice",
  initialState,
  reducers: {
    showCreateFolderDialog: (state) => {
      state.isCreateFolderDialogOpen = true;
    },
    hideCreateFolderDialog: (state) => {
      state.isCreateFolderDialogOpen = false;
    },
    createNewFolder: (state, action) => {
      const newPath = [...state.currentPath, action.payload].join("/");
      if (!state.folders[newPath]) {
        state.folders[newPath] = [];
      }
    },
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
    setSelectedFolder: (state, action) => {
      const selectedFolderExists = state.selectedFolders.some(
        (f) => f.name === action.payload.name
      );
      if (!selectedFolderExists) {
        state.selectedFolders.push(action.payload);
      }
    },
    setFolderList: (state, action) => {
      const path = action.payload.path;
      if (path) {
        state.folders[path].push({
          name: action.payload.name,
          type: action.payload.type,
        });
      }
    },
    refreshFolderList: (state, action) => {
      state.selectedFolders = [];
      const newPath = action.payload.join("/");
      state.filteredFolders = state.folders[newPath].filter((folder) => {
        return Object.keys(folder) === newPath;
      });
    },
  },
});

export const {
  showCreateFolderDialog,
  hideCreateFolderDialog,
  createNewFolder,
  setCurrentPath,
  setSelectedFolder,
  refreshFolderList,
  setFolderList,
} = createFolderSlice.actions;

export default createFolderSlice.reducer;
