import { useAppContext } from "../../hooks/useAppContext";
import S from "./Menu.module.scss";

const Menu = () => {
  const { isMenuActive } = useAppContext();

  const menuStyle = isMenuActive ? `${S.menu} ${S.menu_active}` : `${S.menu}`;

  return (
    <div className={menuStyle}>
      <nav className={S.nav}>
        <ul className={S.list}>
          <li>HOME</li>
          <li>PHONES</li>
          <li>TABLETS</li>
          <li>ACCESSORIES</li>
        </ul>
      </nav>

      <div className={S.wrapper}>
        <div className={S.wrapper_icon}>
          <img src="/public/heart.svg" alt="" />
        </div>
        <div className={S.divider}></div>
        <div className={S.wrapper_icon}>
          <img src="/public/cart.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
