"use client";

import React from "react";

export function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-t-4 border-t-green-400 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
}
