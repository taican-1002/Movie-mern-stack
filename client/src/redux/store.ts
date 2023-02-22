import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/userSlice";
import appStateSlice from "./features/appStateSlice";
import authModalSlice from "./features/authModalSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";
import themeModeSlice from "./features/themeModeSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    appState: appStateSlice,
    authModal: authModalSlice,
    globalLoading: globalLoadingSlice,
    themeMode: themeModeSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
