"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MarvelDataType } from "@/app/lib/type-definitions";
import { InfoTable } from "@/app/components/InfoTable";

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

  return (
      <InfoTable
        baseUrl="/api/characters"
        dataType={MarvelDataType.WITH_IMAGE}
        orderByType="name"
        onClickCallback={(id) => {
          router.push(`/heroes/${id}`);
        }}
        showSearchBox={true}
        searchByType="nameStartsWith"
      />
  );
}
