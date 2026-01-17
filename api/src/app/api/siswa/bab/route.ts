import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireRole } from "@/lib/auth";

export async function GET(req: Request) {
  requireRole("SISWA")(req);
  return NextResponse.json(await prisma.bab.findMany());
}
