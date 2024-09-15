"use client";
import useSWR from "swr";

import React from "react";
import clsx from "clsx";
import { InfoList, MarvelDataType, OnClickCallbackFn } from "@/app/lib/type-definitions";
import { RowComponentWithImage } from "./RowComponentWithImage";
import { RowComponentSimple } from "./RowComponentSimple";
import { mapToInfoList } from "@/app/lib/helpers";

const fetcher = (url: string) => {
  if (!url || url.length == 0) return null;
  return fetch(url).then((res) => res.json());
}

type Props = {
  baseUrl: string;
  mockData?: InfoList;
  dataType: MarvelDataType;
  className?: string;
  onClickCallback?: OnClickCallbackFn;
  orderByType?: string;
}

export function InfoTable({ baseUrl, className, dataType, mockData, onClickCallback, orderByType }: Props) {
  const limit = 30;
  const offset = 0;

  let list: InfoList = [];

  const orderingRequest = orderByType? `orderBy=${orderByType}` : '';
  const requestUrl = baseUrl? `${baseUrl}?${orderingRequest}&limit=${limit}&offset=${offset}` : '';
  const { data, error, isLoading } = useSWR(requestUrl, fetcher);

  if (mockData && mockData.length > 0) {
    list = mockData;
  } else if (!error && !isLoading) {
    try {
      const results = data.data.results;
      list = mapToInfoList(results);
    } catch (err) {
      console.log("unexpected results: err:\n", err);
    }
  }

  return (
    <div className={clsx("min-[100px]: max-w-screen-lg", className)}>
      {isLoading && <div className="text-green-400">Loading...</div>}
      {error && <div className="text-red-500">Failed to load </div>}
      <p className="font-bold mb-2 text-white">InfoTable</p>
      <ul className="flex-grow max-h-[calc(100vh-180px)] min-h-[100px] min-w-[280px] flex flex-col list-none p-0 overflow-y-auto gap-y-2">
        {(!list || list.length == 0) && <li className="text-center">(No data)</li>}
        {dataType == MarvelDataType.WITH_IMAGE && list.map((item) => (
          <RowComponentWithImage className="cursor-pointer" key={item.id} {...item} onClickCallback={onClickCallback} />
        ))}
        {dataType == MarvelDataType.SIMPLE && list.map((item, i) => (
          <RowComponentSimple className="cursor-pointer" key={`${i}_${item.title.substring(5)}`} {...item} />
        ))}
      </ul>
    </div>
  );
}
