import { View, Text, Button, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function UASScreen({ navigation }: any) {
  const [soal, setSoal] = useState([]);
  const [jawabanUser, setJawabanUser] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    // Mengambil soal khusus Semester 1
    api.get("/semester/1/uas").then(res => setSoal(res.data));
  }, []);

  const pilihJawaban = (soalId: number, pilihan: string) => {
    setJawabanUser({ ...jawabanUser, [soalId]: pilihan });
  };

  const submitUAS = async () => {
    // Hitung Skor UAS
    let jumlahBenar = 0;
    soal.forEach((s: any) => {
      if (jawabanUser[s.id] === s.kunci_jawaban) jumlahBenar++;
    });

    const skorUAS = soal.length > 0 ? Math.round((jumlahBenar / soal.length) * 100) : 0;

    // Simpan hasil UAS ke API
    await api.post("/hasil-uas", {
      semesterId: 1,
      nilai: skorUAS,
    });

    // Navigasi ke layar Hasil dengan membawa skor
    navigation.navigate("Hasil", { skor: skorUAS });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Ujian Akhir Semester</Text>
        <Text style={styles.subHeader}>Semester 1</Text>
      </View>
      
      {soal.map((s: any, i: number) => (
        <View key={s.id} style={styles.card}>
          <Text style={styles.pertanyaan}>{i + 1}. {s.pertanyaan}</Text>
          
          {s.pilihan?.map((opsi: string) => {
            const isSelected = jawabanUser[s.id] === opsi;
            return (
              <TouchableOpacity 
                key={opsi} 
                onPress={() => pilihJawaban(s.id, opsi)}
                style={[styles.optionButton, isSelected && styles.optionSelected]}
              >
                <View style={[styles.radioCircle, isSelected && styles.radioSelected]} />
                <Text style={[styles.optionText, isSelected && styles.textSelected]}>{opsi}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}

      <View style={styles.footer}>
        <Button 
          title="Kirim Semua Jawaban" 
          onPress={submitUAS} 
          disabled={Object.keys(jawabanUser).length < soal.length}
          color="#27AE60" // Warna hijau untuk membedakan dengan latihan biasa
        />
        <Text style={styles.infoText}>
          Pastikan semua soal telah terjawab sebelum menekan tombol kirim.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F0F4F7' },
  headerContainer: { marginBottom: 25, alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#2C3E50' },
  subHeader: { fontSize: 16, color: '#7F8C8D' },
  card: { 
    backgroundColor: '#FFF', 
    borderRadius: 15, 
    padding: 20, 
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  pertanyaan: { fontSize: 16, fontWeight: '600', color: '#34495E', marginBottom: 20 },
  optionButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 14, 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#DCDDE1', 
    marginBottom: 12 
  },
  optionSelected: { borderColor: '#27AE60', backgroundColor: '#E8F5E9' },
  optionText: { fontSize: 15, color: '#2F3640' },
  textSelected: { color: '#27AE60', fontWeight: 'bold' },
  radioCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#BDC3C7', marginRight: 12 },
  radioSelected: { borderColor: '#27AE60', backgroundColor: '#27AE60' },
  footer: { marginTop: 10, marginBottom: 50 },
  infoText: { textAlign: 'center', color: '#95A5A6', fontSize: 12, marginTop: 10 }
});