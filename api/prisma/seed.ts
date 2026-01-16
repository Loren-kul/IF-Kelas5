import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  const passwordGuru = await bcrypt.hash("guru123", 10);
  const passwordSiswa = await bcrypt.hash("siswa123", 10);

  await prisma.user.create({
    data: {
      nama: "Guru Informatika",
      email: "guru@ifkelas5.com",
      password: passwordGuru,
      role: "GURU",
    },
  });

  await prisma.user.create({
    data: {
      nama: "Siswa Kelas 5",
      email: "siswa@ifkelas5.com",
      password: passwordSiswa,
      role: "SISWA",
    },
  });

  console.log("✅ Seeder berhasil");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
