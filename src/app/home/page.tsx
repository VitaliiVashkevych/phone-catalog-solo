"use client";

import { HomeSlider } from "@/components/HomeSlider/HomeSlider";
import HotPrices from "@/components/HotPrices";
import NewModels from "@/components/NewModels";
import ShopByCategory from "@/components/ShopByCategory";
import { Product } from "@/types/product";
import getProducts from "@/utils/fetchData";
import { useEffect, useState } from "react";

const Home = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  useEffect(() => {
    const getPhones = async () => {
      try {
        const response = await getProducts("phones");
        setPhones(response.slice(0, 16));
      } catch (error) {
        console.log(error);
      }
    };
    getPhones();
  }, []);
  return (
    <>
      <h1 className="flex w-full font-extrabold text-[32px] leading-[41px] my-6 sm:my-8 xl:my-14">
        Welcome to Nice Gadgets store!
      </h1>
      <HomeSlider />

      <NewModels products={phones} />

      <ShopByCategory />

      <HotPrices products={phones} />
    </>
  );
};

export default Home;
