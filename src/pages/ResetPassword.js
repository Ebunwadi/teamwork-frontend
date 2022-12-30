import React from 'react'
import Password from '../components/Registration-Login-page-components/Password'
// import { useSelector } from "react-redux";


function ResetPassword() {
//   const token = useSelector((state) => state.auth.token)
//   const id = useSelector((state) => state.auth.user)
//   const fetchUser = async () => {
//     await fetch(`https://ebubeproject.onrender.com/api/v1/auth/reset-password/${id}/${token}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//   }
//   useEffect(() => {
//     fetchUser();
// // eslint-disable-next-line
//   }, []);
  return (
    <div>
      <Password />
    </div>
  )
}

export default ResetPassword
