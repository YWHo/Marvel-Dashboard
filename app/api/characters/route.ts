import { NextRequest, NextResponse } from "next/server";
import { baseURL } from "@/app/lib/constants";
import { fetchData, getCacheKey, getTargetUrl } from "@/app/lib/helpers";

export async function GET(req: NextRequest) {
  const targetBaseUrl = `${baseURL}/v1/public/characters`;
  const targetUrl = getTargetUrl(req.url, targetBaseUrl);
  const cacheKey = getCacheKey(req.url, targetBaseUrl);
  const { data, error, status } = await fetchData(
    targetUrl,
    req.headers,
    cacheKey
  );

  if (error) {
    return NextResponse.json({ message: error }, { status });
  }

  return NextResponse.json(data);
}
