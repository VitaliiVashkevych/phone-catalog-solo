import { Product } from "@/types/product";
import getProducts from "@/utils/fetchData";
import { createContext, useEffect, useState } from "react";

type AppContextType = {
  // data: Product[] | undefined;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  // const [data, setData] = useState<Product[] | undefined>();

  const contextValue = {
    // data,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
