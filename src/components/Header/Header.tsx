import { useAppContext } from "../../hooks/useAppContext";
import S from "./Header.module.scss";

const Header = () => {
  const { isMenuActive, setIsMenuActive } = useAppContext();

  const menuIconPath = isMenuActive ? '/public/Union.svg' : '/public/Menu.svg';

  return (
    <header className={S.header}>
      <div className={S.wrapper}>
        <img src="/public/Logo.svg" alt="" className={S.header__logo} />
        <nav className={S.nav}>
          <ul className={S.header__list}>
            <li className={S.header__item}>HOME</li>
            <li className={S.header__item}>PHONES</li>
            <li className={S.header__item}>TABLETS</li>
            <li className={S.header__item}>ACCESSORIES</li>
          </ul>
        </nav>
      </div>

      <div className={S.header__menu_mobile}>
        <div className={S.header__menu_wrapper}>
          <img src={menuIconPath} alt="" onClick={() => setIsMenuActive(prev => !prev)}/>
        </div>
      </div>

      <div className={S.header__buttons}>
        <div className={S.header__menu_wrapper}>
          <img src="/public/heart.svg" alt="" />
        </div>
        <div className={S.header__menu_wrapper}>
          <img src="/public/cart.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
