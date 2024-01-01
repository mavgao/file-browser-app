import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreateFolderDialogOpen: false,
  folders: { "/": [{ name: "root-folder", type: "dir" }], "root-folder": [] },
  selectedFolders: [],
  filteredFolders: [],
  currentPath: ["/"],
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
      const path = action.payload;
      const newPath = path.length ? path.filter((path) => path !== "/") : ["/"];
      state.currentPath = newPath;
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
    renameFolderList: (state, action) => {
      let { path, newPath, originalName, newName } = action.payload;
      let originalPath = path + "/" + originalName;
      if (path && state.folders[path]) {
        const files = state.folders[path];
        const fileToUpdate = files.find((file) => {
          return file.name === originalName;
        });
        if (fileToUpdate) {
          fileToUpdate.name = newName;
        }
        state.folders[path] = files;
        if (newPath.startsWith("/")) {
          originalPath = originalPath.slice(2);
          newPath = newPath.slice(2);
        }
        state.folders[newPath] = state.folders[originalPath];
        delete state.folders[originalPath];
      }
    },
    refreshFolderList: (state, action) => {
      state.selectedFolders = [];
      let newPath = action.payload.join("/");
      if (newPath.startsWith("/")) {
        newPath = newPath.slice(2);
      }
      state.filteredFolders = state.folders[newPath].filter((folder) => {
        return Object.keys(folder) === newPath;
      });
    },
    copyItem: (state, action) => {
      const { selectedFile, prevPath } = action.payload;
      state.folders[prevPath].push(selectedFile[0]);
    },
    removeItem: (state, action) => {
      const { path, selectedFile } = action.payload;
      const index = state.folders[path].findIndex(
        (f) => f.name === selectedFile[0].name
      );
      state.folders[path].splice(index, 1);
    },
    filterFileList: (state, action) => {
      const { value, path } = action.payload;
      state.filteredFolders = state.folders[path.join("/")].filter((f) => {
        return f.name.includes(value);
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
  renameFolderList,
  copyItem,
  removeItem,
  filterFileList,
} = createFolderSlice.actions;

export default createFolderSlice.reducer;
