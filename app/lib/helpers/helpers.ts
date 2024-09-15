import { createHash } from 'crypto';
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

export function getTargetUrl(reqUrl: string, targetBaseUrl: string) : string {
  const apiKeyPublic = process.env.MARVEL_ACCESS_PUBLIC_KEY;
  const apiKeyPrivate = process.env.MARVEL_ACCESS_PRIVATE_KEY;
  const timeStamp = getTimestamp("iso");
  const hash = generateMD5(`${timeStamp}${apiKeyPrivate}${apiKeyPublic}`);
  const urlObject = new URL(targetBaseUrl);

  // Append incoming query parameters to the target URL
  const incomingSearchParams = new URL(reqUrl).searchParams;
  incomingSearchParams.forEach((value, key) => {
    urlObject.searchParams.append(key, value);
  });

  // Add new query parameters
  urlObject.searchParams.append('ts', timeStamp as string);
  urlObject.searchParams.append('apikey', apiKeyPublic as string);
  urlObject.searchParams.append('hash', hash);

  return urlObject.toString();
}

/**
 * Generates a timestamp in various formats.
 * @param format - The format of the timestamp ('unix', 'unix-seconds', 'iso', or 'locale').
 * @returns The current timestamp in the specified format.
 */
export function getTimestamp(format: 'unix' | 'unix-seconds' | 'iso' | 'locale' = 'unix'): string | number {
  const now = new Date();

  switch (format) {
    case 'unix':
      return now.getTime(); // Unix timestamp in milliseconds
    case 'unix-seconds':
      return Math.floor(now.getTime() / 1000); // Unix timestamp in seconds
    case 'iso':
      return now.toISOString(); // ISO 8601 format
    case 'locale':
      return now.toLocaleString(); // Locale string format
    default:
      throw new Error('Unsupported timestamp format');
  }
}

/**
 * Generates an MD5 hash for the given input.
 * @param input - The input string to hash.
 * @returns The MD5 hash as a hexadecimal string.
 */
export function generateMD5(input: string): string {
  return createHash('md5').update(input).digest('hex');
}