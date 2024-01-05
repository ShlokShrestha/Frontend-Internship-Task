"use client";

import React, { useState } from "react";
import SearchBox from "@/components/SearchBox";
import { getDefinition } from "@/utils/dictionaryApi";
import DictionaryCard from "@/components/DictionaryCard";
import Loader from "@/components/Loader";

const Home: React.FC = () => {
  const [dictionaryEntries, setDictionaryEntries] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSearch = async (word: string) => {
    try {
      setLoading(true);
      const data = await getDefinition(word);
      setDictionaryEntries(data);
    } catch (error) {
      console.error("Error fetching definition:", error);
      setDictionaryEntries([]);
    } finally {
      setLoading(false);
    }
  };
  console.log(dictionaryEntries);
  return (
    <div className="md:px-3 px-1 mt-6">
      <SearchBox getSearchValue={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        dictionaryEntries.map((def, index) => (
          <DictionaryCard key={index} data={def} />
        ))
      )}
      <div></div>
    </div>
  );
};

export default Home;
