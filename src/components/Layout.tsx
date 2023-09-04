import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cart from "./Cart";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Layout = () => {
  const { isVisible } = useShoppingCart();

  return (
    <>
      <NavBar />
      {isVisible && <Cart />}
      <main className="flex flex-col min-h-screen bg-white max-w-[1220px] px-4 mx-auto">
        <div>
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
