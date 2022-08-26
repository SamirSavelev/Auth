import { RootState } from "./../../store";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  email: string;
  isAuthenticated: boolean;
}

const initialState: IUser = {
  email: "",
  isAuthenticated: false,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAuth: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setLogin, setAuth } = user.actions;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;
export const selectLogin = (state: RootState) => state.user.email;

export default user.reducer;
