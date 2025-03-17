import { useEffect, useState } from "react";
import MainSlider from "../MainSlider/MainSlider";
import S from "./HomePageLayout.module.scss";
import { getProducts } from "../../functions/getProducts";
import { Product } from "../../types/Product";
import ProductSlider from "../ProductSlider/ProductSlider";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const HomePageLayout = () => {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    const getNewModels = async () => {
      const response = await getProducts("phones");
      setData(response.slice(0, 8));
    };
    getNewModels();
  }, []);
  return (
    <div className={S.container}>
      <h1 className={S.title}>Welcome to Nice Gadgets store!</h1>
      <MainSlider />

      <ProductSlider products={data} sliderName="Brand new models" />

      <ShopByCategory />

      <ProductSlider products={data} sliderName="Hot Prices" />
    </div>
  );
};

export default HomePageLayout;
