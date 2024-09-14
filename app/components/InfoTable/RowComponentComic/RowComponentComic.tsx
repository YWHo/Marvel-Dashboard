import clsx from "clsx";
import Image from "next/image";
import { InfoRow } from "@/app/lib/type-definitions";

interface Props extends InfoRow {
  className?: string;
}

export function RowComponentComic({ className, title }: Props) {
  return (
    <li
      className={clsx(
        "flex w-full border-b border-gray-500 p-4 bg-gray-900 rounded",
        className
      )}
    >
      <figure className="max-w-[40px] max-h-[40px] flex-shrink-0 items-center justify-center w-1/3 md:w-1/6 mr-2 text-white">
        <Image
          src={"/images/marvel-comics.png"}
          alt={`${title} image`}
          width={100}
          height={100}
          style={{ width: "100%", height: "auto" }}
        />
      </figure>
      <article className="flex-grow w-1/2 sm:w-2/3 md:w-5/6 flex flex-col justify-center px-4 text-gray-200">
        <p className="font-bold mb-4">{title}</p>
      </article>
    </li>
  );
}
