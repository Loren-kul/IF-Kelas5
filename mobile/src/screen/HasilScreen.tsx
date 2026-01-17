import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function SoalBabScreen({ route, navigation }: any) {
  const { babId } = route.params;

  const [soal, setSoal] = useState<any[]>([]);
  const [jawabanUser, setJawabanUser] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/bab/${babId}/soal`)
      .then((res) => setSoal(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [babId]);

  const pilihJawaban = (soalId: number, pilihan: string) => {
    setJawabanUser((prev) => ({
      ...prev,
      [soalId]: pilihan,
    }));
  };

  const submit = async () => {
    let jumlahBenar = 0;

    soal.forEach((s: any) => {
      if (jawabanUser[s.id] === s.kunci_jawaban) {
        jumlahBenar++;
      }
    });

    const totalSoal = soal.length;
    const nilai = totalSoal > 0 ? Math.round((jumlahBenar / totalSoal) * 100) : 0;
    const status = nilai >= 75 ? "Tuntas" : "Belum Tuntas";

    // simpan ke backend
    await api.post("/hasil", {
      babId,
      nilai,
      benar: jumlahBenar,
      total: totalSoal,
    });

    // navigasi ke hasil
    navigation.navigate("Hasil", {
      nilai,
      benar: jumlahBenar,
      salah: totalSoal - jumlahBenar,
      status,
    });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Memuat soal...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Uji Kompetensi</Text>

      {soal.map((s: any, i: number) => (
        <View key={s.id} style={styles.card}>
          <Text style={styles.pertanyaan}>
            {i + 1}. {s.pertanyaan}
          </Text>

          {s.pilihan?.map((opsi: string) => {
            const isSelected = jawabanUser[s.id] === opsi;

            return (
              <TouchableOpacity
                key={opsi}
                onPress={() => pilihJawaban(s.id, opsi)}
                style={[
                  styles.optionButton,
                  isSelected && styles.optionSelected,
                ]}
              >
                <View
                  style={[
                    styles.radioCircle,
                    isSelected && styles.radioSelected,
                  ]}
                />
                <Text
                  style={[
                    styles.optionText,
                    isSelected && styles.textSelected,
                  ]}
                >
                  {opsi}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}

      <View style={{ marginBottom: 40 }}>
        <Button
          title="Selesaikan Latihan"
          onPress={submit}
          disabled={Object.keys(jawabanUser).length < soal.length}
          color="#4A90E2"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  pertanyaan: {
    fontSize: 16,
    lineHeight: 24,
    color: "#2C3E50",
    marginBottom: 15,
    fontWeight: "600",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 10,
    backgroundColor: "#F9F9F9",
  },
  optionSelected: {
    borderColor: "#4A90E2",
    backgroundColor: "#EBF3FF",
  },
  optionText: {
    fontSize: 15,
    color: "#555",
  },
  textSelected: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#BDC3C7",
    marginRight: 10,
  },
  radioSelected: {
    borderColor: "#4A90E2",
    backgroundColor: "#4A90E2",
  },
});
