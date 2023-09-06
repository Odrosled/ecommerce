const Banner = () => {
  return (
    <section className="mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 h-80 bg-gray-200">
        <div className="flex flex-col justify-center mx-auto gap-5">
          <h1 className="font-semibold text-3xl">All the tech you need</h1>
          <p className="mb-5">
            All the latest products to make sure you
            <br /> are up to date with the latest tech.
          </p>
          <div>
            <a href="#_" className="relative px-6 py-3 font-bold text-black group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">SHOP NOW</span>
            </a>
          </div>
        </div>
        <div className="bg-[url('/assets/electronics.jpg')] bg-cover bg-no-repeat hidden md:block"></div>
      </div>
    </section>
  );
};

export default Banner;
