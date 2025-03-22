import { useAppContext } from "../../hooks/useAppContext";
import { Product } from "../../types/Product";
import S from "./ProductCard.module.scss";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToFavourites, removeFromFavourites, favourites } = useAppContext();
  const isFavourite = favourites.some((item) => item.id === product.id);

  const handleFavourite = () => {
    if (isFavourite) {
      removeFromFavourites(product);
    } else {
      addToFavourites(product);
    }
  };

  return (
    <article className={S.card}>
      <img src={`/${product.images[0]}`} alt="" className={S.img} />
      <h2 className={S.name}>{product.name}</h2>
      <div className={S.price_wrapper}>
        <p className={S.price}>{`$${product.priceRegular}`}</p>
        <p className={S.priceDiscount}>{`$${product.priceDiscount}`}</p>
      </div>

      <div className={S.divider}></div>

      <div className={S.characteristic_wrapper}>
        <div className={S.characteristic_wrapper_block}>
          <p className={S.characteristic_text}>Screen</p>
          <p className={S.characteristic_text}>Capacity</p>
          <p className={S.characteristic_text}>RAM</p>
        </div>
        <div className={`${S.characteristic_wrapper_block} ${S.values}`}>
          <p className={S.characteristic_text_value}>{product.screen}</p>
          <p className={S.characteristic_text_value}>{product.capacity}</p>
          <p className={S.characteristic_text_value}>{product.ram}</p>
        </div>
      </div>

      <div className={S.button_wrapper}>
        <button className={S.added}>Add to cart</button>
        <button className={S.favourite} onClick={handleFavourite}>
          &lt;3
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
