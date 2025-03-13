"use client";
import ProductCard from "@/components/ProductCard";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import getProducts from "@/utils/fetchData";

const Phones = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    const getPhones = async () => {
      try {
        const response = await getProducts('phones');
        setPhones(response.slice(0, 16));
      } catch (error) {
        console.log(error);
      }
    };
    getPhones();
  }, []);

  return (
    <>
      {phones && (
        <>
          <h2 className="text-red-500">NAVIGATION</h2>
          <h1 className="font-extrabold text-[32px] leading-[41px]">
            Mobile phones
          </h1>
          <p>{phones.length} models</p>
          <h2 className="text-red-500">FILTERS</h2>

          <div className="gridcss grid grid-cols-[repeat(auto-fit,_minmax(272px,_1fr))] gap-x-4 gap-y-10 justify-items-center">
            {phones.map((phone) => (
              <ProductCard product={phone} key={phone.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Phones;
