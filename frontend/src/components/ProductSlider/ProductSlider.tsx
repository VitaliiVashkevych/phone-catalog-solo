import { useState } from "react";
import { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { FreeMode, Navigation } from "swiper/modules";

type Props = {
  products: Product[];
  sliderName: string;
};

const ProductSlider: React.FC<Props> = ({ products, sliderName }) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleDisable = () => {
    setIsPrevDisabled(swiper?.realIndex === 0);
    setIsNextDisabled(swiper?.progress === 1);
  };

  return (
    <>
      {products && (
        <div className="ProductSlider__container">
          <div className="ProductSlider__wrapper">
            <h1 className="ProductSlider__title">{sliderName}</h1>

            <div className="ProductSlider__buttons">
              <button
                className="ProductSlider__button ProductSlider__button-prev"
                onClick={() => swiper.slidePrev()}
                disabled={isPrevDisabled}
              >
                Prev
              </button>
              <button
                className="ProductSlider__button ProductSlider__button-next"
                onClick={() => swiper.slideNext()}
                disabled={isNextDisabled}
              >
                Next
              </button>
            </div>
          </div>

          <div className="ProductSlider-swiper-wrapper">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={16}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
              }}
              freeMode={{
                enabled: true,
                momentumVelocityRatio: 0.5,
              }}
              onSwiper={setSwiper}
              modules={[Navigation, FreeMode]}
              onSlideChange={handleDisable}
              className="ProductSlider-swiper"
            >
              {products.map((product) => (
                <SwiperSlide key={`new-models-${product.id}`}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSlider;
