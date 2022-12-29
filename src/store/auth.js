import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token : '',
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload
    },
    setToken: (state, { payload }) => {
      state.token = payload
    } 
  },
});
export const { setUser, setToken } = authSlice.actions;
export default authSlice.reducer;