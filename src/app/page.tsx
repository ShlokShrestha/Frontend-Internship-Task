"use client";

import React, { useContext, useState } from "react";
import SearchBox from "@/components/SearchBox";
import { getDefinition } from "@/utils/dictionaryApi";
import DictionaryCard from "@/components/DictionaryCard";
import Loader from "@/components/Loader";
import { DictionaryContext } from "@/context/DictionaryContext";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dictionaryEntries, setDictionaryEntries] = useState<string[]>([]);
  const contextData = useContext(DictionaryContext);

  if (!contextData || !contextData.setDictionaryData) {
    return null;
  }

  const { setDictionaryData } = contextData;

  const handleSearch = async (word: string) => {
    try {
      setLoading(true);
      const data = await getDefinition(word);
      setDictionaryEntries(data);
      setDictionaryData(data);
    } catch (error) {
      console.error("Error fetching definition:", error);
      setDictionaryEntries([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-5">
      <Navbar />
      <div className="md:px-3 px-1 mt-6">
        <SearchBox getSearchValue={handleSearch} />
        {loading ? (
          <Loader />
        ) : (
          dictionaryEntries.map((def, index) => (
            <DictionaryCard key={index} data={def} />
          ))
        )}

        <Link href="/dictionarydetail">
          <div style={{ width: "100%" }} className="mt-10">
            <Image
              src="/share.png"
              alt="main logo"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
