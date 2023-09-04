// import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import TextOverlay from "../components/TextOverlay";
import { useGetProducts } from "../hooks/useGetProducts";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading, isError } = useGetProducts({
    limit: 8,
  });
  // const { data: productData } = useGetProduct("2");

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error!</p>;

  return (
    <main>
      <section className="flex justify-between gap-2 md:flex-row flex-col">
        <div className="relative bg-[url('/assets/electronics.jpg')] bg-cover bg-no-repeat md:w-2/4 h-[408px] hover:brightness-50 transition duration-300 cursor-pointer">
          <TextOverlay text="Electronics" />
        </div>
        <div className="relative bg-[url('/assets/jewelry.jpg')] bg-cover bg-no-repeat md:w-1/4 h-[408px] hover:brightness-50 transition duration-300 cursor-pointer">
          <TextOverlay text="Jewerly" />
        </div>
        <div className="flex flex-col gap-2 md:w-1/4">
          <div className="relative bg-[url('/assets/mensclothing.jpg')] bg-cover bg-no-repeat h-[200px] hover:brightness-50 transition duration-300 cursor-pointer">
            <TextOverlay text="Men's Clothing" />
          </div>
          <div className="relative bg-[url('/assets/womensclothing.jpg')] bg-cover bg-no-repeat h-[200px] hover:brightness-50 transition duration-300 cursor-pointer">
            <TextOverlay text="Women's Clothing" />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="font-semibold text-lg mb-8">Products we are proud of</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-8">
          {data.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
