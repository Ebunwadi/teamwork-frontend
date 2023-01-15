// import {useParams} from "react-router-dom";

// const API_URL = '/api/v1/auth'


// //login user
// const login = async(form) => {
//   const res = await fetch(`${API_URL}/login-user`, {
//     method: "POST",
//     body: JSON.stringify(form),
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const feedback = await res.json();

//   if (res.ok) {
//   const { data } = feedback
//     localStorage.setItem('userData', JSON.stringify(data));
//   } else {
//     const {error} = feedback
//     throw new Error(error)
//   }
// }

// // Logout user
// const logout = () => {
//   localStorage.removeItem('userData')
// }

// // forgot password
// const forgotPassword = async (form) => {
//   const res = await fetch(`${API_URL}/forgot-password`, {
//     method: "POST",
//     body: JSON.stringify(form),
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const feedback = await res.json();

//   if (!res.ok) {
//     const {error} = feedback
//     throw new Error(error)
//   }
// }

// // reset password
// const ResetPassword = async (form) => {
//   const params = useParams();
//   const res = await fetch(`${API_URL}/reset-password/${params.id}/${params.token}`, {
//     method: "PATCH",
//     body: JSON.stringify(form),
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const feedback = await res.json();

//   if (!res.ok) {
//     const {error} = feedback
//     throw new Error(error)
//   }
// }

// const authService = {
//   login,
//   logout,
//   forgotPassword,
//   ResetPassword,
// }

// export default authService
