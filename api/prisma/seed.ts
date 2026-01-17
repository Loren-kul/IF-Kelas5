import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("123456", 10);

  await prisma.user.createMany({
    data: [
      {
        name: "Guru Informatika",
        email: "guru@gmail.com",
        password,
        role: "GURU",
      },
      {
        name: "Siswa Kelas 5",
        email: "siswa@gmail.com",
        password,
        role: "SISWA",
      },
    ],
  });
}

main();
