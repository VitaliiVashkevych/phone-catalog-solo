import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-[257px] sm:h-[96px] border-t-1 border-[#E2E6E9] px-4 xl:px-6 flex flex-col sm:flex-row  w-full box-border sm:items-center sm:justify-between">
      <Image
        src="/Logo.svg"
        height={32}
        width={89}
        alt="Logo"
        className="mt-8 sm:mt-0"
      />

      <ul className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-0">
        <li className="uppercase">GitHub</li>
        <li className="uppercase">Contacts</li>
        <li className="uppercase">Rights</li>
      </ul>

      <div className="flex w-full sm:w-fit justify-center items-center gap-4 mt-8 sm:mt-0">
        <p>Back to top</p>
        <div className="h-8 w-8 border justify-center items-center text-center">
          ^
        </div>
      </div>
    </footer>
  );
};

export default Footer;
