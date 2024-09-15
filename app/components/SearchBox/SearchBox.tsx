"use client";

// components/SearchBox.tsx
import React, { useState } from "react";

type SearchBoxProps = {
  placeholder?: string;
  buttonText?: string;
  onSearchCallback: (searchTerm: string) => void;
};

export function SearchBox({
  placeholder = "Search...",
  buttonText = "Search",
  onSearchCallback = () => {},
}: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearchCallback(searchTerm);
  };

  return (
    <div className="flex items-center rounded-lg overflow-hidden w-[290px]">
      <input
        type="text"
        className="flex-1 px-4 py-2 focus:outline-none bg-black"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 text-white p-2 hover:bg-blue-600 focus:outline-none rounded"
        onClick={handleSearch}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default SearchBox;
