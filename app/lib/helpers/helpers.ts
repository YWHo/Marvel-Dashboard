import parseHtml from "html-react-parser";
import { InfoList } from "@/app/lib/type-definitions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapToInfoList(items: any[]): InfoList {
  return items.map((item) => {
    let description = "";
    if (typeof item.description == "string" && item.description.length > 0) {
      description = item.description;
    } else if (
      Array.isArray(item.textObjects) &&
      typeof item.textObjects[0] == "object" &&
      typeof item.textObjects[0].text == "string" &&
      item.textObjects[0].text.length > 0
    ) {
      description = parseHtml(item.textObjects?.[0]?.text) as string;
    }
    const imageURL = getImageURLFromThumbnail(item.thumbnail);

    return {
      id: item.id,
      title: item.title || "",
      description: description,
      imageURL: imageURL,
    };
  });
}

type ThumbnailProps = {
  path?: string;
  extension?:string
} | null;

export function getImageURLFromThumbnail(thumbnail: ThumbnailProps) {
  if (thumbnail && typeof (thumbnail) == "object") {
    if (
      typeof thumbnail.path == "string" &&
      typeof thumbnail.extension == "string"
    ) {
      return `${thumbnail.path}.${thumbnail.extension}`;
    }
  }
  return "";
}