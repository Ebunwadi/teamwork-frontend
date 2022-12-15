import { Outlet } from "react-router-dom";
import Layout from "./components/Higher-Order-Component/Layout";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;