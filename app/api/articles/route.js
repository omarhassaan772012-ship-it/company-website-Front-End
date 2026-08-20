import { NextResponse } from "next/server";

const ARTICLES_API = "https://website-back-end.vercel.app/api/articles";

export async function GET() {
  try {
    const response = await fetch(ARTICLES_API, { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Unable to load projects" },
        { status: response.status }
      );
    }

    return NextResponse.json(await response.json());
  } catch {
    return NextResponse.json(
      { message: "Unable to connect to projects API" },
      { status: 502 }
    );
  }
}