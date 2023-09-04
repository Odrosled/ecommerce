import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const NavBar = () => {
  const { cartItemsLength, show } = useShoppingCart();

  return (
    <div className="bg-white mb-5 flex justify-center items-center shadow-md sticky top-0 z-40">
      <div className="max-w-[1220px] px-4 w-full py-5 flex flex-row justify-between items-center">
        <Link to={"/"}>
          <img className="h-14 w-14" src="/assets/logo.png" alt="" />
        </Link>
        <div className="flex gap-5">
          <p>CATEGORIES</p>
          <p>PRODUCT PAGE</p>
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
