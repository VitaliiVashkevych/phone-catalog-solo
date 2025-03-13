"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";

const NewModels = ({ products }) => {
  return (
    <>
      <h2 className="font-extrabold text-[22px] leading-[140%] mb-6 sm:mt-16">
        Brand new models
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

export default NewModels;
