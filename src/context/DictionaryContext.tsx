"use client";

import React, { createContext, useState, ReactNode } from "react";

interface DictionaryContextProps {
  dictionaryData: string[] | undefined;
  setDictionaryData: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}

export const DictionaryContext = createContext<
  DictionaryContextProps | undefined
>(undefined);

interface DictionaryProviderProps {
  children: ReactNode;
}

const DictionaryProvider: React.FC<DictionaryProviderProps> = ({
  children,
}) => {
  const [dictionaryData, setDictionaryData] = useState<string[] | undefined>(
    undefined
  );

  return (
    <DictionaryContext.Provider value={{ dictionaryData, setDictionaryData }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryProvider;
