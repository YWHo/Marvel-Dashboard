import React from "react";
import { InfoTable } from "@/app/components/InfoTable";
import { Navbar } from "@/app/components/Navbar";
import {
  marvelCharacterDetailById,
  marvelComicsByCharacterId,
  marvelEventsByCharacterId,
  marvelSeriesByCharacterId,
  marvelStoriesByCharacterId,
} from "@/app/lib/mock-data";
import { InfoList, MarvelDataType } from "@/app/lib/type-definitions";
import { Footer } from "@/app/components/Footer";
import { mapToInfoList } from "@/app/lib/helpers";

const comicList: InfoList = mapToInfoList(marvelComicsByCharacterId.results);
const eventList: InfoList = mapToInfoList(marvelEventsByCharacterId.results);
const seriesList: InfoList = mapToInfoList(marvelSeriesByCharacterId.results);
const storyList: InfoList = mapToInfoList(marvelStoriesByCharacterId.results);

type Props = {
  params: { characterId: string };
};

export default function HeroDetail({ params }: Props) {
  console.log("params.characterId: ", params.characterId); // params.characterId
  const heroName = marvelCharacterDetailById.results?.[0]?.name;

  return (
    <div className="container mx-auto mt-12 p-2 pb-10 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <h1 className="text-3xl m-4 text-center text-blue-200 font-serif font-extrabold">
        {heroName ? heroName : `Hero's Detail`}
      </h1>
      <section className="flex flex-col items-center justify-center">
        <h3 id="comic_group" className="text-2xl mt-8 text-red-500 font-semibold">
          Comics
        </h3>
        <InfoTable list={comicList} dataType={MarvelDataType.WITH_IMAGE} />
        <h3 id="event_group" className="text-2xl mt-8 text-red-500 font-semibold">
          Events
        </h3>
        <InfoTable list={eventList} dataType={MarvelDataType.WITH_IMAGE} />
        <h3 id="series_group" className="text-2xl mt-8 text-red-500 font-semibold">
          Series
        </h3>
        <InfoTable list={seriesList} dataType={MarvelDataType.WITH_IMAGE} />
        <h3 id="story_group" className="text-2xl mt-8 text-red-500 font-semibold">
          Stories
        </h3>
        <InfoTable list={storyList} dataType={MarvelDataType.SIMPLE} />
        <div className="mt-8">&nbsp;</div>
      </section>
      <Footer />
    </div>
  );
}
