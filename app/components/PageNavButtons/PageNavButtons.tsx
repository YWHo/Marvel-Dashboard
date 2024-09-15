"use client";

import React from "react";
import clsx from "clsx";

type PageNavButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
  isLoading: boolean;
};

export function PageNavButtons({
  onPrev,
  onNext,
  isLoading,
}: PageNavButtonsProps) {
  return (
    <div className="flex space-x-2 w-[290px]">
      <button
        className={clsx(
          "flex-1 py-2 px-4 h-10 rounded-l-lg border border-gray-300 focus:outline-none",
          {
            "bg-gray-200 text-gray-400 cursor-not-allowed": isLoading,
            "bg-white text-gray-700 hover:bg-gray-100 hover:text-black":
              !isLoading,
          }
        )}
        onClick={onPrev}
        disabled={isLoading}
      >
        Prev&nbsp;Page
      </button>
      <button
        className={clsx(
          "flex-1 py-2 px-4 h-10 rounded-r-lg border border-gray-300 focus:outline-none",
          {
            "bg-gray-200 text-gray-400 cursor-not-allowed": isLoading,
            "bg-white text-gray-700 hover:bg-gray-100 hover:text-black":
              !isLoading,
          }
        )}
        onClick={onNext}
        disabled={isLoading}
      >
        Next&nbsp;Page
      </button>
    </div>
  );
}
