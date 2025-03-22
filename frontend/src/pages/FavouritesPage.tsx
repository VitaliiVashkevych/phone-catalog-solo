import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import "../styles/FavouritesPage.scss";
import { useAppContext } from "../hooks/useAppContext";
import ProductCard from "../components/ProductCard/ProductCard";

const FavouritesPage = () => {
  const { favourites } = useAppContext();
  return (
    <div className="favourites-page__container">
      <Breadcrumbs />
      <h1 className="favourites-page__title">Favourites</h1>
      <p>{favourites.length} items</p>
      <div className="favourites-page__products">
        {favourites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
