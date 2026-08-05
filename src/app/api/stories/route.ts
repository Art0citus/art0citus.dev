import { NextRequest, NextResponse } from "next/server";
import { list, put } from "@vercel/blob";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "stories/" });
    const stories = blobs
      .sort(
        (a, b) =>
          new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime()
      )
      .map((b) => ({ url: b.url, uploadedAt: b.uploadedAt }));

    return NextResponse.json({ stories });
  } catch (err) {
    console.error("Stories GET error:", err);
    // Blob store not configured yet, or a transient error — return an
    // empty list so the client can gracefully fall back to a default.
    return NextResponse.json({ stories: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const adminKey = formData.get("adminKey");
    const file = formData.get("file");

    // Real authorization check — this is server-only and can't be
    // inspected or bypassed from the browser, unlike any client-side gate.
    if (!process.env.ADMIN_KEY || adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const blob = await put(`stories/${Date.now()}.jpg`, file, {
      access: "public",
      contentType: "image/jpeg",
    });

    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("Stories POST error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
