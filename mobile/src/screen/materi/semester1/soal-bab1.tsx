import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import Button from "../../../components/Button";

const soal = [
  {
    id: 1,
    pertanyaan: "Apa yang dimaksud dengan data?",
    pilihan: [
      "Kumpulan informasi",
      "Alat ukur",
      "Hasil gambar",
    ],
    jawaban: 0,
  },
  {
    id: 2,
    pertanyaan: "Contoh data di sekolah adalah …",
    pilihan: [
      "Papan tulis",
      "Jumlah siswa",
      "Buku pelajaran",
    ],
    jawaban: 1,
  },
  {
    id: 3,
    pertanyaan: "Data dapat dikumpulkan dengan cara berikut, kecuali …",
    pilihan: [
      "Mengamati",
      "Wawancara",
      "Menebak",
    ],
    jawaban: 2,
  },
];

export default function SoalBab1Semester1({ navigation }: any) {
  const [jawabanSiswa, setJawabanSiswa] = useState<(number | null)[]>(
    Array(soal.length).fill(null)
  );

  const pilihJawaban = (indexSoal: number, indexJawaban: number) => {
    const newJawaban = [...jawabanSiswa];
    newJawaban[indexSoal] = indexJawaban;
    setJawabanSiswa(newJawaban);
  };

  const hitungNilai = () => {
    let benar = 0;

    soal.forEach((s, i) => {
      if (jawabanSiswa[i] === s.jawaban) {
        benar++;
      }
    });

    const nilai = Math.round((benar / soal.length) * 100);

    navigation.navigate("Hasil", {
      benar,
      salah: soal.length - benar,
      nilai,
      status: nilai >= 75 ? "Tuntas" : "Belum Tuntas",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latihan Bab 1 – Analisis Data</Text>

      {soal.map((s, i) => (
        <View key={s.id} style={styles.soalBox}>
          <Text style={styles.pertanyaan}>
            {i + 1}. {s.pertanyaan}
          </Text>

          {s.pilihan.map((p, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.pilihan,
                jawabanSiswa[i] === idx && styles.pilihanAktif,
              ]}
              onPress={() => pilihJawaban(i, idx)}
            >
              <Text style={styles.pilihanText}>{p}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <Button title="Selesai & Lihat Nilai" onPress={hitungNilai} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  soalBox: {
    marginBottom: 16,
  },
  pertanyaan: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  pilihan: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 6,
  },
  pilihanAktif: {
    backgroundColor: "#dbeafe",
    borderColor: "#2563eb",
  },
  pilihanText: {
    fontSize: 14,
  },
});
