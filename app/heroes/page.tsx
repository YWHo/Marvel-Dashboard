import React from "react";
import { HeroesInfoTableWrapper } from "@/app/components/HeroesInfoTableWrapper";
import { Footer } from "@/app/components/Footer";

export default function HeroesPage() {
  return (
    <div className="container mx-auto p-2 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl m-4 text-center text-blue-200 font-serif font-extrabold">
        The Marvel heroes
      </h1>
      <section className="flex flex-col items-center justify-center">
        <HeroesInfoTableWrapper />
        <div className="my-8">&nbsp;</div>
      </section>
      <Footer />
    </div>
  );
}
