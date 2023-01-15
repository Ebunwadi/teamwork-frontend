// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from './authService'

// // Get user from localStorage
// const storage = localStorage.getItem('userData')

// const initialState = {
//   userData: storage? storage: null,
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   errorMsg: '',
// }
// // login
// export const login = createAsyncThunk('auth/login', async (form, thunkAPI) => {
//   try {
//     return await authService.login(form)
//   } catch (error) {
//     const errorMsg = error.message
//     return thunkAPI.rejectWithValue(errorMsg)
//   }
// })
// // logout
// export const logout = createAsyncThunk('auth/logout', async () => {
//   authService.logout()
// })
// // forgotPassword
// export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (form, thunkAPI) => {
//   try {
//     return await authService.forgotPassword(form)
//   } catch (error) {
//     const errorMsg = error.message
//     return thunkAPI.rejectWithValue(errorMsg)
//   }
// })

// // resetPassword
// export const ResetPassword = createAsyncThunk('auth/ResetPassword', async (form, thunkAPI) => {
//   try {
//     return await authService.ResetPassword(form)
//   } catch (error) {
//     const errorMsg = error.message
//     return thunkAPI.rejectWithValue(errorMsg)
//   }
// })

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isLoading = false
//       state.isSuccess = false
//       state.isError = false
//       state.errorMsg = ''
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         let userData = localStorage.getItem('userData')
//         state.isLoading = false
//         state.isSuccess = true
//         state.userData = userData
//         userData = action.payload
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.errorMsg = action.payload
//         state.user = null
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.userData = null
//       })
//       .addCase(forgotPassword.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(forgotPassword.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//       })
//       .addCase(forgotPassword.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.errorMsg = action.payload
//       })
//       .addCase(ResetPassword.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(ResetPassword.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//       })
//       .addCase(ResetPassword.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.errorMsg = action.payload
//       })
//   },
// })

// export const { reset } = authSlice.actions
// export default authSlice.reducer