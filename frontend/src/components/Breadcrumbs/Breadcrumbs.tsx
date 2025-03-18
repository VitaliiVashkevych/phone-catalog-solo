import S from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const pathname = window.location.pathname.split("/").splice(1);

  return (
    <div className={S.breadcrumbs}>
      <img src="/public/Home.svg" alt="" className={S.icon} />

      {pathname.map((el) => (
        <div key={`breadcrumbs-${el}`}>
          <span className={S.arrow}>{">"}</span><span className={S.el}>{el}</span>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
