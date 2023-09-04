import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProduct";
import Button from "../components/Button";
import { price } from "../utils/price";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ProductPage = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const { addItemToCart, removeFromCart, cartItems } = useShoppingCart();

  const params = useParams<{ id: string }>();

  const { data: product, isLoading, isError } = useGetProduct(params.id ?? "");

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error!</p>;

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity == 1) return;
    setQuantity(quantity - 1);
  };

  const isAlreadyInCart = cartItems.find(
    (item) => item.product.id === product.id
  );

  return (
    <section className="flex gap-12 p-12">
      <img className="w-1/2" src={product.image} alt={product.title} />

      <div className="w-1/2">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-xl">{price(product.price * quantity)}</p>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-300 h-10 w-10 text-xl"
              onClick={decrease}
            >
              -
            </button>
            <p className="px-4 border border-gray-300 flex items-center">
              {quantity}
            </p>
            <button
              className="bg-gray-300 h-10 w-10 text-xl"
              onClick={increase}
            >
              +
            </button>
          </div>
          {isAlreadyInCart ? (
            <Button onClick={() => removeFromCart(product.id)} text="Remove" />
          ) : (
            <Button
              onClick={() => addItemToCart(product, quantity)}
              text="Add to Cart"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
