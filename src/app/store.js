import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preloadedState: persistedState,
});

store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem("state", serializedState);
  } catch {
    // 忽略写入错误
  }
});

export default store;
