import { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import S from "./ProductPageLayout.module.scss";
import { fetchProducts } from "../../functions/fetchProducts";

type Props = {
  productName: string;
};

const ProductPageLayout: React.FC<Props> = ({ productName }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsQuantity, setProductsQuantity] = useState<number>(0);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number>();

  const handlePage = (page: number) => {
    setOffset(limit * page - limit);
    setCurrentPage(page);
  };
  const arr = [];
  for (let i = 1; i <= pages; i++) {
    arr.push(i);
  }
  const pathname = window.location.pathname.slice(1);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts(pathname, { limit, offset });
      setProducts(response.products);
      setProductsQuantity(response.productsQuantity);
      setPages(Math.ceil(response.productsQuantity / limit));
    };
    try {
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);

  return (
    <div className={S.container}>
      {products && (
        <>
          <Breadcrumbs />
          <h1 className={S.title}>{productName}</h1>
          <p className={S.quantity}>{productsQuantity} models</p>
          <div className={S.s}></div>

          <div className={S.grid}>
            {products.map((product) => (
              <ProductCard
                product={product}
                key={`product-page-${product.id}`}
              />
            ))}
          </div>
        </>
      )}
      <div className={S.pagination}>
        <button
          className={S.button}
          onClick={() => handlePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {pages &&
          arr.map((page) => (
            <div
              className={currentPage === page ? S.element_active : S.element}
              onClick={() => handlePage(page)}
            >
              {page}
            </div>
          ))}
        <button
          className={S.button}
          onClick={() => handlePage(currentPage + 1)}
          disabled={currentPage === pages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProductPageLayout;
