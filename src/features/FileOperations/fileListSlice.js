import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileList: [],
  loading: false,
  // 可能还有其他状态，如 fileListFilter
};

const fileListSlice = createSlice({
  name: "fileList",
  initialState,
  reducers: {
    createFile: (state, action) => {},
    setFileList(state, action) {
      state.fileList = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    // 如果有其他操作，如过滤等，也可以在这里添加
  },
  // extraReducers: (builder) => {
  //   builder.addCase(incrementBy, (state, action) => {});
  // },
});

export const { setFileList, setLoading } = fileListSlice.actions;

export default fileListSlice.reducer;
