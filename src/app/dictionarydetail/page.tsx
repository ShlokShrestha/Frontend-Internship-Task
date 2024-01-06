"use client";

import DictionaryCard from "@/components/DictionaryCard";
import { DictionaryContext } from "@/context/DictionaryContext";
import { useContext, useEffect, useState } from "react";

const Page = () => {
  const { dictionaryData } = useContext(DictionaryContext) || {};
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !dictionaryData) {
    return null;
  }

  console.log(dictionaryData);
  return (
    <div className="my-7">
      {dictionaryData.map((def, index) => (
        <div key={index}>
          <DictionaryCard data={def} />
        </div>
      ))}
    </div>
  );
};

export default Page;
