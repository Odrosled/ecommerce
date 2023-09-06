import { useNavigate } from "react-router-dom";
import TextOverlay from "./TextOverlay";

const BannerMenu = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-between gap-2 md:flex-row flex-col mb-24">
      <div
        onClick={() => navigate("/categories/electronics")}
        className="relative bg-[url('/assets/electronics.jpg')] bg-cover bg-no-repeat md:w-2/4 h-[408px] hover:brightness-50 transition duration-300 cursor-pointer"
      >
        <TextOverlay text="Electronics" />
      </div>
      <div
        onClick={() => navigate("/categories/jewelery")}
        className="relative bg-[url('/assets/jewelry.jpg')] bg-cover bg-no-repeat md:w-1/4 h-[408px] hover:brightness-50 transition duration-300 cursor-pointer"
      >
        <TextOverlay text="Jewerly" />
      </div>
      <div className="flex flex-col gap-2 md:w-1/4">
        <div
          onClick={() => navigate("/categories/men's clothing")}
          className="relative bg-[url('/assets/mensclothing.jpg')] bg-cover bg-no-repeat h-[200px] hover:brightness-50 transition duration-300 cursor-pointer"
        >
          <TextOverlay text="Men's Clothing" />
        </div>
        <div
          onClick={() => navigate("/categories/women's clothing")}
          className="relative bg-[url('/assets/womensclothing.jpg')] bg-cover bg-no-repeat h-[200px] hover:brightness-50 transition duration-300 cursor-pointer"
        >
          <TextOverlay text="Women's Clothing" />
        </div>
      </div>
    </section>
  );
};

export default BannerMenu;
