"use client";
import Link from "next/link";
import DictionaryCard from "@/components/DictionaryCard";
import { DictionaryContext } from "@/context/DictionaryContext";
import { useContext, useEffect, useState } from "react";

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface Definition {
  definition: string;
  example: string;
}

interface Phonetics {
  audio: string;
}
interface DictionaryDataItem {
  word: string;
  phonetic: string;
  meanings: Meaning[];
  definitions: Definition[];
  phonetics: Phonetics[];
}
const Page = () => {
  const { dictionaryData } = useContext(DictionaryContext) as {
    dictionaryData?: DictionaryDataItem[];
  };
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !dictionaryData) {
    return null;
  }

  return (
    <div className="my-7">
      {dictionaryData?.map((def, index) => (
        <div key={index}>
          <div className="flex items-center gap-2 mb-10">
            <Link href="/">
              <svg
                className="w-5 h-5 rtl:rotate-180 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </Link>
            <h3 className="font-semibold capitalize text-xl ">
              Word: {def.word}
            </h3>
          </div>
          <DictionaryCard data={def} />
        </div>
      ))}
    </div>
  );
};

export default Page;
