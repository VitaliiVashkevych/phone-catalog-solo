import { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./PhonePageLayout.module.scss";
import { getProducts } from "../../functions/getProducts";
import { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import S from "./PhonePageLayout.module.scss";
import Pagination from "../Pagination/Pagination";

const PhonePageLayout = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  useEffect(() => {
    const getNewModels = async () => {
      const response = await getProducts("phones");
      setPhones(response.slice(0, 20));
    };
    try {
      getNewModels();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={S.container}>
      {phones && (
        <>
          <Breadcrumbs />
          <h1 className={S.title}>Mobile phones</h1>
          <p className={S.quantity}>{phones.length} models</p>
          <h1 style={{ background: "red" }}>FILTER</h1>

          <div className={S.grid}>
            {phones.map((phone) => (
              <ProductCard product={phone} key={`phonepage-${phone.id}`} />
            ))}
          </div>

          <Pagination />
        </>
      )}
    </div>
  );
};

export default PhonePageLayout;
