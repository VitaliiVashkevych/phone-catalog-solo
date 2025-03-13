"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

type Props = {
  products: Product[];
};

const HotPrices: React.FC<Props> = ({ products }) => {
  return (
    <>
      <h2 className="font-extrabold text-[22px] leading-[140%] mb-6">
        Hot prices
      </h2>
      <Swiper width={272} spaceBetween={16}>
        {products &&
          products.map((phone) => (
            <SwiperSlide key={phone.id}>
              <ProductCard product={phone} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default HotPrices;
