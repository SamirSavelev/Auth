import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "./auth-api-slice";
import type { RootState } from "../../store";

type AuthState = {
  accessToken: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { accessToken: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { accessToken } }: PayloadAction<{ accessToken: string }>
    ) => {
      state.accessToken = accessToken;
    },
    setAccessToken: (state, action: PayloadAction<any>) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      }
    );
  },
});
export const { setCredentials, setAccessToken } = slice.actions;

export default slice.reducer;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
