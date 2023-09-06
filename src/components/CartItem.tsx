import { useShoppingCart } from "../context/ShoppingCartContext";
import { price } from "../utils/price";
import { CartItem } from "../utils/types";

const _CartItem = (item: CartItem) => {
  const { removeFromCart, increaseCartItemQuantity, decreaseCartItemQuantity } = useShoppingCart();

  const increase = () => {
    increaseCartItemQuantity(item.product.id);
  };

  const decrease = () => {
    if (item.quantity == 1) return removeFromCart(item.product.id);
    decreaseCartItemQuantity(item.product.id);
  };

  return (
    <div className="md:flex py-8 border-b border-gray-200">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-1 h-auto mx-auto mb-8 md:mb-0 w-1/4">
          <img src={item.product.image} alt={item.product.title} className="w-full h-full object-center object-cover" />
        </div>
        <div className="flex flex-2 flex-col md:pl-3 md:w-3/4 w-full">
          <div className="flex items-center justify-between w-full">
            <p className="text-base font-black leading-none text-gray-800">{item.product.title}</p>
            <div className="flex items-center gap-2">
              <button onClick={decrease} className="bg-gray-300 h-7 w-7 text-xl">
                -
              </button>
              <p className="px-4 border border-gray-300 flex items-center">{item.quantity}</p>
              <button onClick={increase} className="bg-gray-300 h-7 w-7 text-xl">
                +
              </button>
            </div>
          </div>
          <p className="text-sm leading-3 text-gray-600 pt-2">{item.product.description}</p>
          <div className="flex flex-1 items-end justify-between pt-5 pr-6">
            <div className="flex itemms-center">
              <p onClick={() => removeFromCart(item.product.id)} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                Remove
              </p>
            </div>
            <p className="text-base font-black leading-none text-gray-800">{price(item.product.price * item.quantity)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default _CartItem;
