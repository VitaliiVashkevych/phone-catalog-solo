import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MainSlider.scss";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const MainSlider = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const pagination = {
    clickable: true,
    renderBullet: function (_index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className="main_swiper">
      <button onClick={() => swiper.slidePrev()} className="main_swiper-button">
        Prev
      </button>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={pagination}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="main_swiper_slide">
          <img src="/public/slide-phones.png" alt="" className="img_mobile" />
        </SwiperSlide>
        <SwiperSlide className="main_swiper_slide">
          <img src="/public/slide-tablets.png" alt="" className="img_mobile" />
        </SwiperSlide>
        <SwiperSlide className="main_swiper_slide">
          <img src="/public/slide-watches.png" alt="" className="img_mobile" />
        </SwiperSlide>
      </Swiper>
      <button onClick={() => swiper.slideNext()} className="main_swiper-button">
        Next
      </button>
    </div>
  );
};

export default MainSlider;
