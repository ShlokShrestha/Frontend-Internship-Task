import React, { useState } from "react";

interface SearchBoxProps {
  getSearchValue: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ getSearchValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      getSearchValue(inputValue);
    } else {
      alert("Please write word to search");
    }
  };

  return (
    <div className="relative ">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm bg-gray-200 rounded-xl"
        placeholder="Search Word"
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 my-auto font-medium rounded-lg text-sm px-4 py-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
