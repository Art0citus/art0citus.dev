import { NextRequest, NextResponse } from "next/server";
import { del, list, put } from "@vercel/blob";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { blobs } = await list({
      prefix: "stories/",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const stories = blobs
      .sort(
        (a, b) =>
          new Date(a.uploadedAt).getTime() -
          new Date(b.uploadedAt).getTime()
      )
      .map((b) => ({
        url: b.url,
        uploadedAt: b.uploadedAt,
      }));

    return NextResponse.json({ stories });
  } catch (err) {
    console.error("Stories GET error:", err);
    return NextResponse.json({ stories: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const adminKey = formData.get("adminKey");
    const file = formData.get("file");

    if (!process.env.ADMIN_KEY || adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const token = process.env.BLOB_READ_WRITE_TOKEN;

    if (!token) {
      console.error("BLOB_READ_WRITE_TOKEN is missing");

      return NextResponse.json(
        { error: "Blob storage is not configured" },
        { status: 500 }
      );
    }

    const blob = await put(`stories/${Date.now()}.jpg`, file, {
      access: "public",
      contentType: file.type || "image/jpeg",
      token,
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
    });
  } catch (err) {
    console.error("Stories POST error:", err);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const adminKey = searchParams.get("adminKey");
    const url = searchParams.get("url");

    if (!process.env.ADMIN_KEY || adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!url) {
      return NextResponse.json(
        { error: "Story URL is required" },
        { status: 400 }
      );
    }

    const token = process.env.BLOB_READ_WRITE_TOKEN;

    if (!token) {
      console.error("BLOB_READ_WRITE_TOKEN is missing");

      return NextResponse.json(
        { error: "Blob storage is not configured" },
        { status: 500 }
      );
    }

    await del(url, { token });

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error("Stories DELETE error:", err);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}