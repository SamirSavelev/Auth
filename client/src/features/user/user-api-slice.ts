import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  isAuthenticated: boolean;
}

export interface ISignup {
  email: string;
  password: string;
}

export interface ISignUpReturn {
  username: string;
  email: string;
}

export interface IAuth {
  username: string;
  password: string;
}

export interface IToken {
  accessToken: string | null;
}
export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    signUp: builder.mutation<ISignUpReturn, ISignup>({
      query: (body) => ({
        url: `/signin`,
        method: "POST",
        body: {
          email: body.email,
          password: body.password,
        },
      }),
    }),
    authUser: builder.mutation<IToken, IAuth>({
      query: (body) => ({
        url: `auth/login/`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAuthUserMutation, useSignUpMutation } = userAPI;
