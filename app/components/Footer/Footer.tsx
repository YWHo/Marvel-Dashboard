import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <section className="fixed bottom-0 left-0 w-full p-6 h-10 flex justify-end items-center bg-blue-900 border-t-2 border-gray-700 z-10">
      <Link href="https://www.marvel.com/">
        <p className="text-green-600 text-sm underline mr-10">{`Data provided by Marvel. © 2014 Marvel`}</p>
      </Link>
    </section>
  );
}
