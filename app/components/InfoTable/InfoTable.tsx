"use client";

import React from "react";
import clsx from "clsx";
import { InfoList, MarvelDataType } from "@/app/lib/type-definitions";
import { RowComponentWithImage } from "./RowComponentWithImage";
import { RowComponentSimple } from "./RowComponentSimple";

type Props = {
  list: InfoList;
  dataType: MarvelDataType;
  className?: string;
  onClickCallback?: Function;
}

export function InfoTable({ className, dataType, list, onClickCallback }: Props) {
  return (
    <div className={clsx("min-[100px]: max-w-screen-lg", className)}>
      <p className="font-bold mb-2 text-white">InfoTable</p>
      <ul className="flex-grow max-h-[calc(100vh-180px)] flex flex-col list-none p-0 overflow-y-auto gap-y-1">
        {dataType == MarvelDataType.WITH_IMAGE && list.map((item) => (
          <RowComponentWithImage key={item.id} {...item} onClickCallback={onClickCallback} />
        ))}
        {dataType == MarvelDataType.SIMPLE && list.map((item, i) => (
          <RowComponentSimple key={`${i}_${item.title.substring(5)}`} {...item} />
        ))}
      </ul>
    </div>
  );
}
