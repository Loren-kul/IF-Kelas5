import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";

export async function POST(req: Request) {
  requireRole("SISWA")(req);
  return NextResponse.json({ message: "Jawaban disimpan" });
}
