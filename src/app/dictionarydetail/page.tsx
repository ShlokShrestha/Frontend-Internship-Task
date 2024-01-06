"use client";

import DictionaryCard from "@/components/DictionaryCard";
import { DictionaryContext } from "@/context/DictionaryContext";
import { useContext, useEffect, useState } from "react";
interface DictionaryDataItem {
  word: string;
}

const Page = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const { dictionaryData } = useContext(DictionaryContext) as {
    dictionaryData?: DictionaryDataItem[];
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !dictionaryData) {
    return null;
  }

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
