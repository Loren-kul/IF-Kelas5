Aplikasi Pembelajaran Interaktif Kelas 5 (Mobile & API)

Project IF-Kelas5 adalah aplikasi pembelajaran berbasis Mobile (Expo React Native) dan Backend API (Next.js + Prisma) yang mendukung role Guru dan Siswa. Untuk Sekolah Dasar sejak Kurikulum Merdeka menjadi Mata Pelajaran Informatika yang dulu hanya TIK saja.

🧩 Fitur Utama
👩‍🏫 Guru
    Login sebagai guru
    Kelola Semester
    Kelola Bab
    Kelola Materi
    Kelola soal

👨‍🎓 Siswa
    Login sebagai siswa
    Pilih semester
    Baca materi
    Kerjakan latihan & UAS
    Melihat hasil

🏗️ Teknologi yang Digunakan
    Mobile
    Expo (React Native)
    React Navigation
    Axios
    AsyncStorage
    TypeScript

Backend (API)
Next.js (App Router)
Prisma ORM
PostgreSQL / MySQL
JWT Authentication
Role-based Access (Guru & Siswa)

## 📁 Struktur Folder Project

```bash
IF-Kelas5/
├── api/                       # Backend API (Next.js + Prisma)
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── src/
│   │   ├── app/
│   │   │   └── api/
│   │   │       ├── auth/
│   │   │       │   └── login/
│   │   │       │       └── route.ts
│   │   │       ├── guru/
│   │   │       │   ├── semester/
│   │   │       │   │   └── route.ts
│   │   │       │   ├── bab/
│   │   │       │   │   └── route.ts
│   │   │       │   └── materi/
│   │   │       │       └── route.ts
│   │   │       └── siswa/
│   │   │           ├── semester/
│   │   │           │   └── route.ts
│   │   │           └── bab/
│   │   │               └── route.ts
│   │   └── lib/
│   │       ├── prisma.ts
│   │       ├── jwt.ts
│   │       └── auth.ts
│   ├── .env
│   └── package.json
│
├── mobile/                    # Aplikasi Mobile (Expo)
│   ├── src/
│   │   ├── auth/
│   │   │   └── LoginScreen.tsx
│   │   ├── screen/
│   │   │   ├── SemesterScreen.tsx
│   │   │   ├── BabScreen.tsx
│   │   │   ├── MateriScreen.tsx
│   │   │   ├── SoalBabScreen.tsx
│   │   │   ├── UASScreen.tsx
│   │   │   └── HasilScreen.tsx
│   │   ├── navigation/
│   │   │   └── AppNavigator.tsx
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   └── services/
│   │       └── api.ts
│   ├── App.tsx
│   ├── index.ts
│   └── package.json
│
└── README.md

