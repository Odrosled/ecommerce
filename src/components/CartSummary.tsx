import { useMemo } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { price } from "../utils/price";

const CartSummary = () => {
  const { cartItems } = useShoppingCart();
  const total = useMemo(() => {
    let _total = 0;
    for (const item of cartItems) {
      //prettier-ignore
      _total = _total + (item.product.price * item.quantity);
    }
    return _total;
  }, [cartItems]);

  return (
    <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
      <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
        <div>
          <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
        </div>
        <div>
          <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
            <p className="text-2xl leading-normal text-gray-800">Total</p>
            <p className="text-2xl font-bold leading-normal text-right text-gray-800">
              {price(total)}
            </p>
          </div>
          <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
