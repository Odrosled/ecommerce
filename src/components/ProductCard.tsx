import { Link } from "react-router-dom";
import { Product } from "../utils/types";
import { price } from "../utils/price";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="flex flex-col gap-4 border border-gray-300 p-4 cursor-pointer">
        <div>
          <img className="object-contain w-[200px] aspect-square mx-auto" src={product.image} alt={product.title} />
        </div>
        <p className="line-clamp-1">{product.title}</p>
        <p className="font-semibold">{price(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
