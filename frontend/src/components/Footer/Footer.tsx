import S from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={S.footer}>
      <div className={S.container}>
        <img src="/public/Logo.svg" alt="Logo" className={S.logo} />

        <nav className={S.nav}>
          <ul className={S.list}>
            <li>GITHUB</li>
            <li>CONTACTS</li>
            <li>RIGHTS</li>
          </ul>
        </nav>

        <div className={S.wrapper}>
          <p className={S.to_top}>Back to top</p>
          <button className={S.button}>^</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
