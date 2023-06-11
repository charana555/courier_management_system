import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  packages: [],
  error: "",
};

const packageSlice = createSlice({
  name: "package",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPackages.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPackages.fulfilled, (state, action) => {
      state.loading = false;
      state.packages = action.payload;
      state.error = "";
    });

    builder.addCase(fetchPackages.rejected, (state, action) => {
      state.loading = false;
      state.packages = [];
      state.error = action.error.message;
    });
  },
});

export const fetchPackages = createAsyncThunk("package/fetchPAckages", () => {
  return axios
    .get("http://127.0.0.1:5000/api/v1/order/orders")
    .then((response) => response.data.result);
});

export default packageSlice.reducer;
