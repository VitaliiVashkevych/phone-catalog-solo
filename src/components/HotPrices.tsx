"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";

const HotPrices = () => {
  const data = Array(10).fill(1);
  return (
    <>
      <h2>Hot prices</h2>
      <Swiper width={272} spaceBetween={16}>
        {data.map(() => (
          <SwiperSlide key={Math.random()}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HotPrices;
