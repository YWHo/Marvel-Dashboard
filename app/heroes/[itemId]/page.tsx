import React from "react";
import parseHtml from "html-react-parser";
import { InfoTable } from "@/app/components/InfoTable";
import {
  marvelComicsByCharacterId,
  marvelEventsByCharacterId,
} from "@/app/lib/mock-data";
import { InfoList, MarvelDataType } from "@/app/lib/type-definitions";
import { Footer } from "@/app/components/Footer";

const comicList: InfoList = marvelComicsByCharacterId.results.map((item) => ({
  id: item.id,
  title: item.title || "",
  description: item.description
    ? item.description
    : item.textObjects?.[0]?.text
    ? (parseHtml(item.textObjects?.[0]?.text) as string)
    : "",
  imageURL: `${item.thumbnail.path}.${item.thumbnail.extension}`,
}));

const eventList: InfoList = marvelEventsByCharacterId.results.map((item) => ({
  id: item.id,
  title: item.title || "",
  description: item.description || "",
  imageURL: `${item.thumbnail.path}.${item.thumbnail.extension}`,
}));

type Props = {
  params: { itemId: string };
};

export default function HeroDetail({ params }: Props) {
  return (
    <div className="container mx-auto p-2 pb-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl m-4 text-center text-blue-200 font-serif font-extrabold">
        {`Hero's Detail`} {params.itemId}
      </h1>
      <section className="flex flex-col items-center justify-center">
        <h3 className="text-2xl mt-8">Comics:</h3>
        <InfoTable list={comicList} dataType={MarvelDataType.WITH_IMAGE} />
        <h3 className="text-2xl mt-8">Events:</h3>
        <InfoTable list={eventList} dataType={MarvelDataType.WITH_IMAGE} />
        <div className="mt-8">&nbsp;</div>
      </section>
      <Footer />
    </div>
  );
}
