import Image from "next/image";

const ShopByCategory = () => {
  return (
    <div>
      <h2>Shop by category</h2>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div>
          <Image
            width={368}
            height={368}
            alt=""
            src={"/category/phones.png"}
            className="hover:scale-107 transition-transform"
          />
          <h4>Mobile phones</h4>
          <p>95 models</p>
        </div>
        <div>
          <Image
            width={368}
            height={368}
            alt=""
            src={"/category/tablets.png"}
            className="hover:scale-107 transition-transform"
          />
          <h4>Tablets</h4>
          <p>24 models</p>
        </div>
        <div>
          <Image
            width={368}
            height={368}
            alt=""
            src={"/category/accessories.png"}
            className="hover:scale-107 transition-transform"
          />
          <h4>Accessories</h4>
          <p>100 models</p>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
