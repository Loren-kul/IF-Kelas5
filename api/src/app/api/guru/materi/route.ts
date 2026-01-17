import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireRole } from "@/lib/auth";

export async function POST(req: Request) {
  requireRole("GURU")(req);
  const { judul, isi, babId } = await req.json();

  const materi = await prisma.materi.create({
    data: { judul, isi, babId },
  });

  return NextResponse.json(materi);
}
