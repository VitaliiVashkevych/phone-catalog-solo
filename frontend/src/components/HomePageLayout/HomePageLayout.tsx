import { useEffect, useState } from "react";
import MainSlider from "../MainSlider/MainSlider";
import S from "./HomePageLayout.module.scss";
import { Product } from "../../types/Product";
import ProductSlider from "../ProductSlider/ProductSlider";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { fetchProducts } from "../../functions/fetchProducts";

const HomePageLayout = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [discountedProducts, setDiscountedProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts("phones");

      setNewProducts(
        response.products.filter(
          (product) => product.processor === "Apple A16 Bionic"
        )
      );
      setDiscountedProducts(
        response.products.filter((product) => product.priceDiscount <= 700)
      );
    };
    getProducts();
  }, []);
  return (
    <div className={S.container}>
      <h1 className={S.title}>Welcome to Nice Gadgets store!</h1>
      <MainSlider />

      <ProductSlider products={newProducts} sliderName="Brand new models" />

      <ShopByCategory />

      <ProductSlider products={discountedProducts} sliderName="Hot Prices" />
    </div>
  );
};

export default HomePageLayout;
