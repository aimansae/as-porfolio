import { loadPayload } from "@/app/lib/payload";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await loadPayload();
  const body = await req.json();
  try {
    const saveMessage = await payload.create({
      collection: "contact" as const,
      data: {
        name: body.name,
        email: body.email,
        message: body.message,
      },
    });

    return NextResponse.json({ success: true, data: saveMessage });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      success: false,
      error: "Failed to send your message",
    });
  }
}
