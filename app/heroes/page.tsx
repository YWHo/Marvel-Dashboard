import React from "react";
import { InfoTable } from "@/app/components/InfoTable";
import { marvelCharacters } from "@/app/lib/mock-data";
import { InfoList, MarvelDataType } from "@/app/lib/type-definitions";
import { Footer } from "@/app/components/Footer";

const characterList: InfoList = marvelCharacters.results.map((item) => ({
  id: item.id,
  title: item.name,
  description: item.description,
  imageURL: `${item.thumbnail.path}.${item.thumbnail.extension}`,
}));

export default function HeroesPage() {
  return (
    <div className="container mx-auto p-2 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl m-4 text-center text-blue-200 font-serif font-extrabold">
        The Marvel heroes
      </h1>
      <section className="flex items-center justify-center">
        <InfoTable list={characterList} dataType={MarvelDataType.WITH_IMAGE} />
      </section>
      <Footer />
    </div>
  );
}
