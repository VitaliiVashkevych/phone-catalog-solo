"use client";
import ProductCard from "@/components/ProductCard";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import getProducts from "@/utils/fetchData";

const Phones = () => {
  const [tablets, setTablets] = useState<Product[]>([]);

  useEffect(() => {
    const getTablets = async () => {
      try {
        const response = await getProducts("tablets");
        setTablets(response.slice(0, 16));
      } catch (error) {
        console.log(error);
      }
    };
    getTablets();
  }, []);

  return (
    <>
      {tablets && (
        <>
          <h2 className="text-red-500">NAVIGATION</h2>
          <h1 className="font-extrabold text-[32px] leading-[41px]">
            Tablets
          </h1>
          <p>{tablets.length} models</p>
          <h2 className="text-red-500">FILTERS</h2>

          <div className="gridcss grid grid-cols-[repeat(auto-fit,_minmax(272px,_1fr))] gap-x-4 gap-y-10 justify-items-center">
            {tablets.map((tablet) => (
              <ProductCard product={tablet} key={tablet.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Phones;
