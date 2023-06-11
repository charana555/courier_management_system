import { configureStore } from "@reduxjs/toolkit";
import packageSlice from "./slices/packageSlice";

const store = configureStore({
  reducer: {
    package: packageSlice,
  },
});

export default store;
