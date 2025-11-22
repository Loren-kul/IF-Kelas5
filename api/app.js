// app.js
/**
 * =========================================================
 * SETUP APLIKASI SERVER EXPRESS
 * =========================================================
 */
const express = require('express'); // Mengimpor framework Express.js
const app = express(); // Membuat instance (objek) aplikasi Express
const cors = require('cors'); // Mengimpor middleware CORS untuk mengizinkan permintaan lintas domain
require('dotenv').config(); // Memuat variabel lingkungan dari file .env ke process.env
const mongoose = require('mongoose'); // Mengimpor Mongoose untuk koneksi dan pemodelan data MongoDB

/**
 * =========================================================
 * MIDDLEWARE
 * =========================================================
 */
// Menerapkan middleware CORS ke seluruh aplikasi
app.use(cors());

// Menerapkan middleware untuk mengurai body permintaan dalam format JSON.
// Penting untuk mengakses data yang dikirimkan melalui POST/PUT di req.body.
app.use(express.json());

/**
 * =========================================================
 * KONEKSI DATABASE MONGODB
 * =========================================================
 */
// Menghubungkan aplikasi ke database MongoDB menggunakan URL dari variabel
mongoose.connect(process.env.MONGO_URL)
  .then(()=> console.log('DB connected')) // Mencetak pesan jika koneksi berhasil
  .catch(err => console.error(err)); // Mencetak error jika koneksi gagal

/**
 * =========================================================
 * DEFINISI RUTE API
 * =========================================================
 * Mengaitkan (mount) rute yang didefinisikan di file terpisah ke path dasar tertentu.
 */
// Menggunakan rute dari './routes/auth' untuk semua path yang diawali '/auth' (misalnya, /auth/login)
app.use('/auth', require('./routes/auth')); 

// Menggunakan rute dari './routes/materi' untuk semua path yang diawali '/materi'
app.use('/materi', require('./routes/materi')); 

// Menggunakan rute dari './routes/soal' untuk semua path yang diawali '/soal'
app.use('/soal', require('./routes/soal')); 

/**
 * =========================================================
 * MENJALANKAN SERVER
 * =========================================================
 */
// Menentukan PORT server, menggunakan nilai dari .env atau default ke 5000
const PORT = process.env.PORT || 5000;

// Memulai server Express dan mendengarkan permintaan masuk pada PORT yang ditentukan
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));