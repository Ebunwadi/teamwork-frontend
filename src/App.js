import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from "./components/Higher-Order-Component/Layout";
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

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