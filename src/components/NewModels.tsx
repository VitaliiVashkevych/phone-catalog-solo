"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";

const NewModels = () => {
  const data = Array(10).fill(1);
  return (
    <>
      <h2>Brand new models</h2>
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

export default NewModels;
