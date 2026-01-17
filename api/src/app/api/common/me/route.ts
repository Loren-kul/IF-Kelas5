import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  const user = auth(req);
  return NextResponse.json(user);
}
