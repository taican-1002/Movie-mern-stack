import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GlobalLoadingSlice {
  globalLoading: boolean;
}

const initialState: GlobalLoadingSlice = {
  globalLoading: false,
};

export const globalLoadingSlice = createSlice({
  name: "AuthModal",
  initialState,
  reducers: {
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.globalLoading = action.payload;
    },
  },
});

export const { setGlobalLoading } = globalLoadingSlice.actions;

export default globalLoadingSlice.reducer;
