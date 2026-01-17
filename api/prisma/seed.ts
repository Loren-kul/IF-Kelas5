import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("123456", 10);

  await prisma.user.createMany({
    data: [
      {
        nama: "Guru IF",
        email: "guru@gmail.com",
        password,
        role: "GURU",
      },
      {
        nama: "Siswa IF",
        email: "siswa@gmail.com",
        password,
        role: "SISWA",
      },
    ],
  });

  await prisma.semester.createMany({
    data: [
      { nama: "Semester 1" },
      { nama: "Semester 2" },
    ],
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
