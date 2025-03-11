import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="border-[#E2E6E9] border-2 w-[212px] sm:w-[237px] xl:w-[272px] h-[439px] sm:h-[512px] xl:h-[506px] p-8 box-border">
      <div className="h-[196px] flex justify-center items-center bg-gray-300">
        <Image width={208} height={196} alt="Photo" src={"/Logo.svg"} />
      </div>
      <h3 className="mt-6">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</h3>
      <p className="mt-2">
        $799 <span className="line-through">$899</span>
      </p>
      <div className="h-[1px] w-full bg-[#E2E6E9] my-2"></div>
      <div>
        <div className="flex justify-between">
          <p>Screen</p>
          <p>5.8” OLED</p>
        </div>
        <div className="flex justify-between">
          <p>Capacity</p>
          <p>64GB</p>
        </div>
        <div className="flex justify-between">
          <p>RAM</p>
          <p>4GB</p>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-2 mt-2">
        <button className="w-full bg-[#313237] text-[#FFFFFF] flex-1">Add to cart</button>
        <button className="w-[40px] h-[40px] border border-[#B4BDC3] box-border">&lt;3</button>
      </div>
    </div>
  );
};

export default ProductCard;
