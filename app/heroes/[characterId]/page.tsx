import React from "react";
import parseHtml from "html-react-parser";
import { InfoTable } from "@/app/components/InfoTable";
import {
  marvelCharacterDetailById,
  marvelComicsByCharacterId,
  marvelEventsByCharacterId,
  marvelSeriesByCharacterId
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

const seriesList: InfoList = marvelSeriesByCharacterId.results.map((item) => ({
  id: item.id,
  title: item.title || "",
  description: item.description || "",
  imageURL: `${item.thumbnail.path}.${item.thumbnail.extension}`,
}));

type Props = {
  params: { characterId: string };
};

export default function HeroDetail({ params }: Props) {
  console.log('params.characterId: ', params.characterId);  // params.characterId
  const heroName = marvelCharacterDetailById.results?.[0]?.name

  return (
    <div className="container mx-auto p-2 pb-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl m-4 text-center text-blue-200 font-serif font-extrabold">
        {heroName? heroName : `Hero's Detail`}
      </h1>
      <section className="flex flex-col items-center justify-center">
        <h3 className="text-2xl mt-8">Comics:</h3>
        <InfoTable list={comicList} dataType={MarvelDataType.WITH_IMAGE} />
        <h3 className="text-2xl mt-8">Events:</h3>
        <InfoTable list={eventList} dataType={MarvelDataType.WITH_IMAGE} />
        <h3 className="text-2xl mt-8">Series:</h3>
        <InfoTable list={seriesList} dataType={MarvelDataType.WITH_IMAGE} />
        <div className="mt-8">&nbsp;</div>
      </section>
      <Footer />
    </div>
  );
}
