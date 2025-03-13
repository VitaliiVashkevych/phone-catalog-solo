import { Product } from "@/types/product";
import Image from "next/image";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border-[#E2E6E9] border-2 w-[272px] h-auto p-8 box-border">
      <div className="h-[196px] flex justify-center items-center p-[32px]">
        <Image width={208} height={196} alt="Photo" src={`/${product.images[0]}`} />
      </div>
      <h3 className="mt-6">{product.name}</h3>
      <p className="mt-2">
        {product.priceRegular}{" "}
        <span className="line-through">{product.priceDiscount}</span>
      </p>
      <div className="h-[1px] w-full bg-[#E2E6E9] my-2"></div>
      <div>
        <div className="flex justify-between">
          <p>Screen</p>
          <p>{product.screen}</p>
        </div>
        <div className="flex justify-between">
          <p>Capacity</p>
          <p>{product.capacity}</p>
        </div>
        <div className="flex justify-between">
          <p>RAM</p>
          <p>{product.ram}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-2 mt-2">
        <button className="w-full bg-[#313237] text-[#FFFFFF] flex-1">
          Add to cart
        </button>
        <button className="w-[40px] h-[40px] border border-[#B4BDC3] box-border">
          &lt;3
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
