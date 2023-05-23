import { Outlet } from "react-router-dom";
import Footer from "../PAGES/SHARED/Footer";
import NavBar from "../PAGES/SHARED/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
