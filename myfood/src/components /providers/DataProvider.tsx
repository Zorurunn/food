"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type DataContextType = {
  isDisplay: boolean;
  setIsDisplay: Dispatch<SetStateAction<boolean>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <DataContext.Provider value={{ isDisplay, setIsDisplay }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
