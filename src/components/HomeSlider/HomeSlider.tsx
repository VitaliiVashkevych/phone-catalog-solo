"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useState } from "react";

import "./HomeSlider.css";

export const HomeSlider = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const pagination = {
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className="slider">
      <button className="slider__button" onClick={() => swiper.slidePrev()}>
        LEFT
      </button>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={pagination}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Autoplay, Pagination, Navigation]}
        className="home-swiper"
      >
        <SwiperSlide>
          <Image
            width={639}
            height={639}
            alt=""
            src={"/main/main1mobile.png"}
            className="img img-mobile"
          />
          <Image
            width={639}
            height={639}
            alt=""
            src={"/main/main1desktop.png"}
            className="img img-desktop"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={639}
            height={639}
            alt=""
            src={"/main/main1mobile.png"}
            className="img img-mobile"
          />
          <Image
            width={639}
            height={639}
            alt=""
            src={"/main/main1desktop.png"}
            className="img img-desktop"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={639}
            height={639}
            alt=""
            src={"/main/main1mobile.png"}
            className="img img-mobile"
          />
          <Image
            width={639}
            height={639}
            alt=""
            src={"/main/main1desktop.png"}
            className="img img-desktop"
          />
        </SwiperSlide>
      </Swiper>

      <button className="slider__button" onClick={() => swiper.slideNext()}>
        RIGHT
      </button>
    </div>
  );
};
