import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const NavBar = () => {
  const { cartItemsLength, show } = useShoppingCart();

  return (
    <div className="bg-white mb-5 flex justify-center items-center shadow-md sticky top-0 z-40">
      <div className="max-w-[1220px] px-4 w-full py-5 flex flex-row justify-between items-center">
        <Link to={"/"}>
          <h1 className="font-bold tracking-widest text-xl text-purple drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">
            SHOPPALO
          </h1>
        </Link>
        <div className="flex gap-5">
          <p className="hover:underline cursor-pointer">CATEGORIES</p>
          <Link to={"/categories"}>
            <p className="hover:underline cursor-pointer">PRODUCT PAGE</p>
          </Link>
          <button onClick={show} className="relative">
            <img src="/assets/shopping-cart-simple.svg" alt="cart" />
            <div className="rounded-full bg-red-500 flex justify-center items-center text-white w-6 h-6 absolute bottom-0 right-0 transform translate-x-[50%] translate-y-[50%]">
              {cartItemsLength}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
