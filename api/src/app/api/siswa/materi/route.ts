import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    requireRole("SISWA")(req);
    return NextResponse.json({ message: "Materi siswa" });
  } catch {
    return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
  }
}
