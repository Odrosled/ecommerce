import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { hide, cartItems } = useShoppingCart();

  return (
    <div
      className="z-50 w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
      id="chec-div"
    >
      <div
        className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
        id="checkout"
      >
        <div className="flex md:flex-row flex-col justify-end" id="cart">
          <div
            className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
            id="scroll"
          >
            <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <p onClick={hide} className="text-sm pl-2 leading-none">
                Back
              </p>
            </div>
            <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
              Cart
            </p>
            {cartItems.map((item) => {
              return <CartItem key={item.product.id} {...item} />;
            })}
          </div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
