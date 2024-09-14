import React from "react";
import parseHtml from "html-react-parser";
import { InfoTable } from "@/app/components/InfoTable";
import { marvelComicsByCharacterId } from "@/app/lib/mock-data";
import { InfoList, MarvelDataType } from "@/app/lib/type-definitions";
import { Footer } from "@/app/components/Footer";

const comicList: InfoList = marvelComicsByCharacterId.results.map((item) => ({
  id: item.id,
  title: item.title || "",
  description: item.description
    ? item.description
    : item.textObjects?.[0]?.text? parseHtml(item.textObjects?.[0]?.text) as string : "",
  imageURL: `${item.thumbnail.path}.${item.thumbnail.extension}`,
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
        <InfoTable list={comicList} dataType={MarvelDataType.WITH_IMAGE} />
      </section>
      <Footer />
    </div>
  );
}
