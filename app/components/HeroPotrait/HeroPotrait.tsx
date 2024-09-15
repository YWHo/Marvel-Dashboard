"use client";

import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { getImageURLFromThumbnail } from "@/app/lib/helpers";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
  id: string;
};

export function HeroPotrait({ id }: Props) {
  const requestUrl = `/api/characters/${id}`;
  const { data, error, isLoading } = useSWR(requestUrl, fetcher);

  if (error) return <div>failed to get the Hero</div>;
  if (isLoading) return <div>{`loading...a Hero's Potrait`}</div>;

  let heroName = "",
    imageUrl = "";
  try {
    heroName = data.data?.results?.[0]?.name || "";
    imageUrl = getImageURLFromThumbnail(data.data?.results?.[0]?.thumbnail);
  } catch (err) {
    console.log("HeroPotrait: unexpected error:\n", err);
  }

  return (
    <div className="min-h-[360px]">
      <h1 className="text-3xl m-4 text-center text-blue-200 font-serif font-extrabold">
        {heroName ? heroName : `Hero's Detail`}
      </h1>
      {imageUrl.length > 0 && (
        <figure className="flex flex-col items-center justify-center mt-6">
          <Image
            src={imageUrl}
            alt="Centered Landing Image"
            width={300}
            height={300}
            className="object-contain rounded" // Ensures the image scales down within the bounds
          />
        </figure>
      )}
    </div>
  );
}

export default HeroPotrait;
