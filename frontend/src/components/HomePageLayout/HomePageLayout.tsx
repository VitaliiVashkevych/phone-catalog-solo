import { useEffect, useState } from "react";
import MainSlider from "../MainSlider/MainSlider";
import S from "./HomePageLayout.module.scss";
import { Product } from "../../types/Product";
import ProductSlider from "../ProductSlider/ProductSlider";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { fetchProducts } from "../../functions/fetchProducts";

const HomePageLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts("phones");
      setProducts(response.slice(0, 8));
    };
    getProducts();
  }, []);
  return (
    <div className={S.container}>
      <h1 className={S.title}>Welcome to Nice Gadgets store!</h1>
      <MainSlider />

      <ProductSlider products={products} sliderName="Brand new models" />

      <ShopByCategory />

      <ProductSlider products={products} sliderName="Hot Prices" />
    </div>
  );
};

export default HomePageLayout;
