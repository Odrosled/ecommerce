// import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useGetProducts } from "../hooks/useGetProducts";
import Banner from "../components/Banner";
import BannerMenu from "../components/BannerMenu";

const HomePage = () => {
  const { data, isLoading, isError } = useGetProducts({
    limit: 8,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error!</p>;

  return (
    <main>
      <BannerMenu />
      <section className="mt-12">
        <h2 className="font-semibold text-2xl mb-8">Products we are proud of</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-8">
          {data.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
      <Banner />
    </main>
  );
};

export default HomePage;
