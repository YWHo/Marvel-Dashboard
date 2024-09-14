import React from "react";
import { InfoTable } from "@/app/components/InfoTable";
import { marvelCharacterDetailById } from "@/app/lib/mock-data";
import { InfoList, MarvelDataType } from "@/app/lib/type-definitions";
import { Footer } from "@/app/components/Footer";

const characterList: InfoList =
  marvelCharacterDetailById.results[0].comics.items.map((item) => ({
    title: item.name,
  }));

type Props = {
  params: { itemId: string };
};

export default function HeroDetail({ params }: Props) {
  return (
    <div className="container mx-auto p-2 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl m-4 text-center text-blue-200 font-serif font-extrabold">
        {`Hero's Detail`} {params.itemId}
      </h1>
      <section className="flex items-center justify-center">
        <InfoTable list={characterList} dataType={MarvelDataType.SIMPLE} />
      </section>
      <Footer />
    </div>
  );
}
