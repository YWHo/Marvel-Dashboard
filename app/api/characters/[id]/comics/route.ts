import { NextRequest, NextResponse } from "next/server";
import { baseURL } from "@/app/lib/constants";
import { getTargetUrl } from "@/app/lib/helpers";

export async function GET(req: NextRequest, { params }: { params: {id: number} }) {
  const { id } = params;
  const targetBaseUrl = `${baseURL}/v1/public/characters/${id}/comics`;
  const targetUrl = getTargetUrl(req.url, targetBaseUrl);

  try {
    // Fetch data from the external API
    const response = await fetch(targetUrl, {
      method: 'GET',
      ...Object.fromEntries(req.headers.entries()), // Forward headers from the original request
    });

    // Check if the response is ok
    if (!response.ok) {
      return NextResponse.json({ message: 'Error fetching data' }, { status: response.status });
    }

    // Get the data in JSON format
    const data = await response.json();

    // Forward the response data to the client
    return NextResponse.json(data);
  } catch (error) {
    // Handle any errors that occur during the fetch
    return NextResponse.json({ message: 'Internal Server Error', error: (error as Error).message }, { status: 500 });
  }
}