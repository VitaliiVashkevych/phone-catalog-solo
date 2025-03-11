"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import 'swiper/css/pagination';
import './swiperCustom.css';

import { Pagination } from 'swiper/modules';

const MainSwiper = () => {
  return (
    <Swiper width={272} spaceBetween={50} pagination={true} modules={[Pagination]} className="mySwiper pb-10">
      <SwiperSlide>
        <Image width={639} height={639} alt="" src={'/main/main1mobile.png'}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image width={639} height={639} alt="" src={'/main/main1mobile.png'}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image width={639} height={639} alt="" src={'/main/main1mobile.png'}/>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSwiper;
