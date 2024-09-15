import React from "react";
import { InfoTable } from "@/app/components/InfoTable";
import { Navbar } from "@/app/components/Navbar";
import { MarvelDataType } from "@/app/lib/type-definitions";
import { Footer } from "@/app/components/Footer";
import { HeroPotrait } from "@/app/components/HeroPotrait";

type Props = {
  params: { characterId: string };
};

export default function HeroDetail({ params }: Props) {
  const { characterId } = params;

  return (
    <div className="container mx-auto mt-12 p-2 pb-10 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroPotrait id={characterId} />
      <section className="flex flex-col items-center justify-center">
        <h3
          id="comic_group"
          className="text-2xl mt-10 text-red-500 font-semibold"
        >
          Comics
        </h3>
        <InfoTable
          baseUrl={`/api/characters/${characterId}/comics`}
          dataType={MarvelDataType.WITH_IMAGE}
          orderByType="title"
        />
        <h3
          id="event_group"
          className="text-2xl mt-10 text-red-500 font-semibold"
        >
          Events
        </h3>
        <InfoTable
          baseUrl={`/api/characters/${characterId}/events`}
          dataType={MarvelDataType.WITH_IMAGE}
          orderByType="name"
        />
        <h3
          id="series_group"
          className="text-2xl mt-10 text-red-500 font-semibold"
        >
          Series
        </h3>
        <InfoTable
          baseUrl={`/api/characters/${characterId}/series`}
          dataType={MarvelDataType.WITH_IMAGE}
          orderByType="title"
        />
        <h3
          id="story_group"
          className="text-2xl mt-8 text-red-500 font-semibold"
        >
          Stories
        </h3>
        <InfoTable
          baseUrl={`/api/characters/${characterId}/stories`}
          dataType={MarvelDataType.SIMPLE}
          orderByType="id"
        />
        <div className="mt-8">&nbsp;</div>
      </section>
      <Footer />
    </div>
  );
}
