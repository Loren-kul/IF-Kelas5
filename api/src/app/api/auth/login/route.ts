import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return NextResponse.json({ message: "Email salah" }, { status: 401 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid)
    return NextResponse.json({ message: "Password salah" }, { status: 401 });

  const token = signToken({
    id: user.id,
    role: user.role,
  });

  return NextResponse.json({
    token,
    user: {
      id: user.id,
      nama: user.nama,
      role: user.role,
    },
  });
}
