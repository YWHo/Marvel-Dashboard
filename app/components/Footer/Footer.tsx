import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <section className="fixed bottom-0 left-0 w-full p-6 h-8 flex justify-center items-center">
      <Link href="https://www.marvel.com/">
        <p className="text-white border-b">{`Data provided by Marvel. © 2014 Marvel`}</p>
      </Link>
    </section>
  );
}
