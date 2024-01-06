"use client";

import DictionaryCard from "@/components/DictionaryCard";
import { DictionaryContext } from "@/context/DictionaryContext";
import { useContext, useEffect, useState } from "react";
interface DictionaryDataItem {
  word: string;
}

const Page = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const contextData = useContext(DictionaryContext) || {};

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !contextData) {
    return null;
  }

  const { dictionaryData } = useContext(DictionaryContext) as {
    dictionaryData?: DictionaryDataItem[];
  };
  console.log(dictionaryData);
  return (
    <div className="my-7">
      {dictionaryData?.map((def, index) => (
        <div key={index}>
          <h3 className="font-semibold capitalize text-xl mb-8">
            Word: {def.word}
          </h3>
          <DictionaryCard data={def} />
        </div>
      ))}
    </div>
  );
};

export default Page;
