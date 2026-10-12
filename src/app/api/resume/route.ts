import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const shouldDownload = searchParams.get("download") === "1";

  // Try Manikant_Kumar.pdf first, fallback to resume.pdf
  const primaryPath = path.join(process.cwd(), "public", "Manikant_Kumar.pdf");
  const fallbackPath = path.join(process.cwd(), "public", "resume.pdf");

  let targetPath = primaryPath;
  if (!fs.existsSync(targetPath)) {
    targetPath = fallbackPath;
  }

  if (!fs.existsSync(targetPath)) {
    return new NextResponse("Resume file not found on server", { status: 404 });
  }

  try {
    const fileBuffer = fs.readFileSync(targetPath);
    const disposition = shouldDownload
      ? 'attachment; filename="Manikant_Kumar.pdf"'
      : 'inline; filename="Manikant_Kumar.pdf"';

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": disposition,
        "Cache-Control": "public, max-age=86400, must-revalidate",
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (err) {
    return new NextResponse("Internal error reading resume", { status: 500 });
  }
}
