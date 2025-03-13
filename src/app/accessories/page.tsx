"use client";
import ProductCard from "@/components/ProductCard";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import getProducts from "@/utils/fetchData";

const Phones = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);

  useEffect(() => {
    const getAccessories = async () => {
      try {
        const response = await getProducts('accessories');
        setAccessories(response.slice(0, 16));
      } catch (error) {
        console.log(error);
      }
    };
    getAccessories();
  }, []);

  return (
    <>
      {accessories && (
        <>
          <h2 className="text-red-500">NAVIGATION</h2>
          <h1 className="font-extrabold text-[32px] leading-[41px]">
            Accessories
          </h1>
          <p>{accessories.length} models</p>
          <h2 className="text-red-500">FILTERS</h2>

          <div className="gridcss grid grid-cols-[repeat(auto-fit,_minmax(272px,_1fr))] gap-x-4 gap-y-10 justify-items-center">
            {accessories.map((accessory) => (
              <ProductCard product={accessory} key={accessory.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Phones;
