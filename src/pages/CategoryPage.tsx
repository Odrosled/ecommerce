import { Link, useParams } from "react-router-dom";
import { useGetCategories } from "../hooks/useGetCaregories";
import { useGetCategoryProducts } from "../hooks/useGetCategoryProducts";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const CategoriesPage = () => {
  const [selectedCat, setSelectedCat] = useState<string>("");

  const params = useParams<{ cat: string }>();

  const { data } = useGetCategories();

  const { data: products } = useGetCategoryProducts({
    limit: 20,
    category: params.cat ?? "electronics",
  });

  return (
    <div className="p-10 flex flex-col">
      <div className="flex items-center mb-20">
        <div className="flex">
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
          <Link to={"/"}>
            <p className="text-sm pl-2 leading-none">Home</p>
          </Link>
        </div>
        <h1 className="mx-auto font-bold text-2xl">{selectedCat ?? "electronics"}</h1>
      </div>
      <div>
        <ul className="flex justify-around mb-20">
          {data?.map((category: string) => (
            <Link to={`/categories/${category}`}>
              <li onClick={() => setSelectedCat(category)} className="py-2 px-5 border border-purple cursor-pointer hover:animate-pulse" key={category}>
                {category}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-8">
        {products?.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;
