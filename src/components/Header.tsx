import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[48px] xl:h-[64px] pl-4 xl:pl-6 justify-between items-center flex border-b-1 border-[#E2E6E9] box-border">
      <Image
        src="/Logo.svg"
        height={22}
        width={64}
        alt="Logo"
        className="sm:hidden"
      />

      <div className="w-[48px] h-[48px] flex justify-center items-center border-l-1 border-[#E2E6E9] sm:hidden">
        <Image src="/Menu.svg" height={16} width={13} alt="Menu" />
      </div>

      <div className="hidden sm:flex gap-8 xl:gap-12">
        <Image src="/Logo.svg" height={22} width={64} alt="Logo" className="xl:hidden"/>
        <Image src="/Logo.svg" height={28} width={80} alt="Logo" className="hidden xl:block"/>
        <ul className="flex gap-8 xl:gap-16 text-[#89939A]">
          <li className="uppercase">home</li>
          <li className="uppercase">phones</li>
          <li className="uppercase">tablets</li>
          <li className="uppercase">accessories</li>
        </ul>
      </div>

      <div className="hidden sm:flex">
        <div className="w-[48px] border-l-1 border-[#E2E6E9] h-[48px] justify-center items-center flex xl:h-[64px] xl:w-[64px]">
          <Image src="heart.svg" alt="" width={16} height={16} />
        </div>
        <div className="w-[48px] border-l-1 border-[#E2E6E9] h-[48px] justify-center items-center flex xl:h-[64px] xl:w-[64px]">
          <Image src="cart.svg" alt="" width={16} height={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;
