import { NavLink } from "react-router";
import { useAppContext } from "../../hooks/useAppContext";
import S from "./Header.module.scss";

const Header = () => {
  const { isMenuActive, setIsMenuActive } = useAppContext();

  const menuIconPath = isMenuActive ? "/public/Union.svg" : "/public/Menu.svg";

  return (
    <header className={S.header}>
      <div className={S.wrapper}>
        <img src="/public/Logo.svg" alt="" className={S.header__logo} />
        <nav className={S.nav}>
          <ul className={S.header__list}>
            <li className={S.header__item}>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? S.active : S.inactive)}
              >
                HOME
              </NavLink>
            </li>
            <li className={S.header__item}>
              <NavLink
                to={"/phones"}
                className={({ isActive }) => (isActive ? S.active : S.inactive)}
              >
                PHONES
              </NavLink>
            </li>
            <li className={S.header__item}>
              <NavLink
                to={"/tablets"}
                className={({ isActive }) => (isActive ? S.active : S.inactive)}
              >
                TABLETS
              </NavLink>
            </li>
            <li className={S.header__item}>
              <NavLink
                to={"/accessories"}
                className={({ isActive }) => (isActive ? S.active : S.inactive)}
              >
                ACCESSORIES
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className={S.header__menu_mobile}>
        <div className={S.header__menu_wrapper}>
          <img
            src={menuIconPath}
            alt=""
            onClick={() => setIsMenuActive((prev) => !prev)}
          />
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
