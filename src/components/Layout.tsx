import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white w-3/5 mx-auto">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
