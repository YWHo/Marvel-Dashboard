"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import { marvelCharacters } from "@/app/lib/mock-data";
import { InfoList, MarvelDataType } from "@/app/lib/type-definitions";
import { InfoTable  } from "@/app/components/InfoTable";

const characterList: InfoList = marvelCharacters.results.map((item) => ({
  id: item.id,
  title: item.name,
  description: item.description,
  imageURL: `${item.thumbnail.path}.${item.thumbnail.extension}`,
}));


/**
 * A top-level client component that renders an InfoTable with a list of Marvel heroes,
 * allowing navigation to hero detail pages when a row is clicked.
 *
 * @function HeroesInfoTableWrapper
 * @returns {JSX.Element} The InfoTable component with clickable rows for navigation.
 *
 * @example
 * <HeroesInfoTableWrapper />
 */
export function HeroesInfoTableWrapper() {
  const router = useRouter();
  return (<InfoTable className="cursor-pointer" list={characterList} dataType={MarvelDataType.WITH_IMAGE} onClickCallback={(id: number) => {
    router.push(`/heroes/${id}`);
  }}/>)
}

