import HotPrices from "@/components/HotPrices";
import MainSwiper from "@/components/MainSwiper";
import NewModels from "@/components/NewModels";
import ShopByCategory from "@/components/ShopByCategory";

const Home = () => {
  return (
    <div className="max-w-[1136px]">
      <h1 className="flex w-full font-extrabold text-[32px] leading-[41px] my-6 sm:my-8 xl:my-14">
        Welcome to Nice Gadgets store!
      </h1>
      <MainSwiper />

      <NewModels />

      <ShopByCategory />

      <HotPrices />
    </div>
  );
};

export default Home;
