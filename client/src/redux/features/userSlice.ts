import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any;
  listFavorites: Array<any>;
}

const initialState: UserState = {
  user: null,
  listFavorites: [],
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token)
          localStorage.setItem("actkn", action.payload.token);
      }
      state.user = action.payload;
    },

    setListFavorites: (state, action: PayloadAction<any>) => {
      state.listFavorites = action.payload;
    },

    addFavorite: (state, action: PayloadAction<Array<object>>) => {
      state.listFavorites = [action.payload, ...state.listFavorites];
    },

    removeFavorite: (state, action: PayloadAction<any>) => {
      const { mediaId } = action.payload;
      state.listFavorites = [...state.listFavorites].filter(
        (e) => e.mediaId.toString() !== mediaId.toString()
      );
    },
  },
});

export const { setUser, setListFavorites, addFavorite, removeFavorite } =
  userSlice.actions;

export default userSlice.reducer;
