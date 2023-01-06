import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from "./components/Higher-Order-Component/Layout";

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default App;