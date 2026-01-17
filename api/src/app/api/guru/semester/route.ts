import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    requireRole("GURU")(req);
    return NextResponse.json({ message: "Data semester (guru)" });
  } catch {
    return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
  }
}
