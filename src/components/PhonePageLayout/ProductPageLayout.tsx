import { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./PhonePageLayout.module.scss";
import { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import S from "./PhonePageLayout.module.scss";
import Pagination from "../Pagination/Pagination";
import { fetchProducts } from "../../functions/fetchProducts";

type Props = {
  productName: string;
};

const ProductPageLayout: React.FC<Props> = ({ productName }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const pathname = window.location.pathname.slice(1);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts(pathname);
      setProducts(response.slice(0, 20));
    };
    try {
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={S.container}>
      {products && (
        <>
          <Breadcrumbs />
          <h1 className={S.title}>{productName}</h1>
          <p className={S.quantity}>{products.length} models</p>
          <h1 style={{ background: "red" }}>FILTER</h1>

          <div className={S.grid}>
            {products.map((product) => (
              <ProductCard
                product={product}
                key={`product-page-${product.id}`}
              />
            ))}
          </div>

          <Pagination />
        </>
      )}
    </div>
  );
};

export default ProductPageLayout;
