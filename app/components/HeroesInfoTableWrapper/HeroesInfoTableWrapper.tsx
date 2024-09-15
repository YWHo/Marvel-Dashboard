"use client";

import React from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { InfoList, MarvelDataType } from "@/app/lib/type-definitions";
import { InfoTable } from "@/app/components/InfoTable";
import { mapToInfoList } from "@/app/lib/helpers";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
  const limit = 30;
  const offset = 0;

  // Use SWR to fetch data
  const requestUrl = `/api/characters?orderBy=name&limit=${limit}&offset=${offset}`;
  const { data, error, isLoading } = useSWR(requestUrl, fetcher);

  let characterList: InfoList = [];
  if (!isLoading && !error) {
    const results = data.data.results;
    characterList = mapToInfoList(results);
  }

  return (
    <>
      {isLoading && <div className="text-green-400">Loading...</div>}
      {error && <div className="text-red-500">Failed to load </div>}
      <InfoTable
        list={characterList}
        dataType={MarvelDataType.WITH_IMAGE}
        onClickCallback={(id) => {
          router.push(`/heroes/${id}`);
        }}
      />
    </>
  );
}
