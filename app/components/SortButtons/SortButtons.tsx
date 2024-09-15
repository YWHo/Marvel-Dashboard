"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { SortOrder } from "@/app/lib/type-definitions";

type Props = {
  onSortCallback: (sortOrder: SortOrder) => void;
};

export function SortButtons({ onSortCallback = () => {} }: Props) {
  const [activeOrder, setActiveOrder] = useState<SortOrder>("ascending");

  const handleClick = (order: SortOrder) => {
    setActiveOrder(order);
  };

  return (
    <div className="flex flex-row space-x-2 w-[290px]">
      <button
        className={clsx(
          `flex-1 py-2 px-4 h-10 rounded-l-lg border border-gray-900`,
          `hover:bg-blue-500 hover:text-white focus:outline-none`,
          {
            "bg-blue-500 text-white": activeOrder === "ascending",
            "bg-white text-gray-700": activeOrder === "descending",
          }
        )}
        onClick={() => {
          if (activeOrder == "ascending") return;
          handleClick("ascending");
          onSortCallback("ascending");
        }}
      >
        Ascending
      </button>
      <button
        className={clsx(
          `flex-1 py-2 px-4 h-10 rounded-r-lg border border-gray-900`,
          `hover:bg-blue-500 hover:text-white focus:outline-none`,
          {
            "bg-blue-500 text-white": activeOrder === "descending",
            "bg-white text-gray-700": activeOrder === "ascending",
          }
        )}
        onClick={() => {
          if (activeOrder == "descending") return;
          handleClick("descending");
          onSortCallback("descending");
        }}
      >
        Descending
      </button>
    </div>
  );
}
