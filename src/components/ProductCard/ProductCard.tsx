import { Product } from "../../types/Product";
import S from "./ProductCard.module.scss";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <article className={S.card}>
      <img src={`/${product.images[0]}`} alt="" className={S.img} />
      <h2 className={S.name}>{product.name}</h2>
      <div className={S.price_wrapper}>
        <p>{product.priceRegular}</p>
        <p>{product.priceDiscount}</p>
      </div>
    </article>
  );
};

export default ProductCard;
