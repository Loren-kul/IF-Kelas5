import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireRole } from "@/lib/auth";

export async function POST(req: Request) {
  requireRole("GURU")(req);
  const { nama, semesterId } = await req.json();

  const bab = await prisma.bab.create({
    data: { nama, semesterId },
  });

  return NextResponse.json(bab);
}
