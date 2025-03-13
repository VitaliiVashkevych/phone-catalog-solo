import Image from "next/image";

const ShopByCategory = () => {
  return (
    <div>
      <h2 className="font-extrabold text-[22px] leading-[140%] mb-6 mt-[56px]">
        Shop by category
      </h2>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div>
          <Image
            width={368}
            height={368}
            alt=""
            src={"/category/phones.png"}
            className="hover:scale-105 transition-transform"
          />
          <h4 className="font-bold text-[20px] leading-[100%] mt-6 mb-1">
            Mobile phones
          </h4>
          <p className="font-semibold text-[14px] leading-[140%] text-[#89939A]">
            95 models
          </p>
        </div>
        <div>
          <Image
            width={368}
            height={368}
            alt=""
            src={"/category/tablets.png"}
            className="hover:scale-105 transition-transform"
          />
          <h4 className="font-bold text-[20px] leading-[100%] mt-6 mb-1">Tablets</h4>
          <p className="font-semibold text-[14px] leading-[140%] text-[#89939A]">
            24 models
          </p>
        </div>
        <div>
          <Image
            width={368}
            height={368}
            alt=""
            src={"/category/accessories.png"}
            className="hover:scale-105 transition-transform"
          />
          <h4 className="font-bold text-[20px] leading-[100%] mt-6 mb-1">
            Accessories
          </h4>
          <p className="font-semibold text-[14px] leading-[140%] text-[#89939A]">
            100 models
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
