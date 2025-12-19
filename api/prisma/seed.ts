import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // hapus data lama (aman saat development)
  await prisma.hasil.deleteMany();
  await prisma.user.deleteMany();

  // password default
  const passwordGuru = await bcrypt.hash("guru123", 10);
  const passwordSiswa = await bcrypt.hash("siswa123", 10);

  // user guru
  const guru = await prisma.user.create({
    data: {
      nama: "Guru Informatika",
      email: "guru@ifkelas5.com",
      password: passwordGuru,
      role: "GURU",
    },
  });

  // user siswa
  const siswa = await prisma.user.create({
    data: {
      nama: "Siswa Kelas 5",
      email: "siswa@ifkelas5.com",
      password: passwordSiswa,
      role: "SISWA",
    },
  });

  console.log("✅ Seed data berhasil");
  console.log({ guru, siswa });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
