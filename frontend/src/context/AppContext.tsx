import { createContext, Dispatch, SetStateAction, useState } from "react";

type AppContextType = {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const contextValue = {
    isMenuActive,
    setIsMenuActive
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}