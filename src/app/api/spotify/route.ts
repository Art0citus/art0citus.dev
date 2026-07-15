import { NextResponse } from "next/server";
import { getLastPlayed } from "@/lib/spotify";

// Prevent Next.js from statically caching this route — Spotify data
// needs to be fetched fresh on every request.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const track = await getLastPlayed();
    return NextResponse.json(track);
  } catch (err) {
    console.error("Spotify API error:", err);
    return NextResponse.json(null, { status: 500 });
  }
}