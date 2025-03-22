import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Product } from "../types/Product";

type AppContextType = {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
  favourites: Product[];
  addToFavourites: (product: Product) => void;
  removeFromFavourites: (product: Product) => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [favourites, setFavourites] = useState<Product[]>([]);

  const addToFavourites = (product: Product) => {
    setFavourites([...favourites, product]);
  };

  const removeFromFavourites = (product: Product) => {
    setFavourites(favourites.filter((item) => item.id !== product.id));
  };
  console.log(favourites);
  

  const contextValue = {
    isMenuActive,
    setIsMenuActive,
    favourites,
    addToFavourites,
    removeFromFavourites,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
