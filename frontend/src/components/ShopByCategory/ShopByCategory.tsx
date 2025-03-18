import S from "./ShopByCategory.module.scss";

const ShopByCategory = () => {
  return (
    <section className={S.container}>
      <h2 className={S.title}>Shop by category</h2>

      <div className={S.wrapper}>
        <div className={S.category_wrapper}>
          <img src="/public/category/phones.png" alt="Phones" className={S.img}/>
          <h3 className={S.name}>Mobile phones</h3>
          <p className={S.quantity}>95 models / arr length</p>
        </div>
        <div className={S.category_wrapper}>
          <img src="/public/category/tablets.png" alt="Tablets" className={S.img}/>
          <h3 className={S.name}>Tablets</h3>
          <p className={S.quantity}>95 models / arr length</p>
        </div>
        <div className={S.category_wrapper}>
          <img src="/public/category/accessories.png" alt="Accessories" className={S.img}/>
          <h3 className={S.name}>Accessories</h3>
          <p className={S.quantity}>95 models / arr length</p>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
