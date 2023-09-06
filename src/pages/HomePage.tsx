// import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import BannerMenu from "../components/BannerMenu";
import ProductGrid from "../components/ProductGrid";

const HomePage = () => {
  return (
    <main>
      <BannerMenu />
      <ProductGrid />
      <Banner />
    </main>
  );
};

export default HomePage;
