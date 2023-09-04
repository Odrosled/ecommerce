import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../utils/types";

interface ShoppingCartContext {
  increaseCartItemQuantity: (id: number) => void;
  decreaseCartItemQuantity: (id: number) => void;
  cartItems: CartItem[];
  cartItemsLength: number;
  addItemToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
  show: () => void;
  hide: () => void;
  isVisible: boolean;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const addItemToCart = (product: Product, quantity: number) => {
    setCartItems([...cartItems, { product, quantity }]);
  };

  const removeFromCart = (id: number) => {
    const newCart = cartItems.filter((item) => item.product.id !== id);
    setCartItems(newCart);
  };

  const increaseCartItemQuantity = (id: number) => {
    const newCart = cartItems.map((item) => {
      if (item.product.id === id)
        return { ...item, quantity: item.quantity + 1 };
      return item;
    });
    setCartItems(newCart);
  };

  const decreaseCartItemQuantity = (id: number) => {
    const newCart = cartItems.map((item) => {
      if (item.product.id === id)
        return { ...item, quantity: item.quantity - 1 };
      return item;
    });
    setCartItems(newCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
        cartItems,
        cartItemsLength: cartItems.length,
        addItemToCart,
        removeFromCart,
        show: () => setShowCart(true),
        hide: () => setShowCart(false),
        isVisible: showCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
