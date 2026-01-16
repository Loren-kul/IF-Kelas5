import { View, Text, Button, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function SoalBabScreen({ route, navigation }: any) {
  const { babId } = route.params;
  const [soal, setSoal] = useState([]);
  const [jawabanUser, setJawabanUser] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    api.get(`/bab/${babId}/soal`).then(res => setSoal(res.data));
  }, []);

  const pilihJawaban = (soalId: number, pilihan: string) => {
    setJawabanUser({ ...jawabanUser, [soalId]: pilihan });
  };

  const submit = async () => {
    let jumlahBenar = 0;
    soal.forEach((s: any) => {
      if (jawabanUser[s.id] === s.kunci_jawaban) jumlahBenar++;
    });

    const skorAkhir = soal.length > 0 ? Math.round((jumlahBenar / soal.length) * 100) : 0;
    await api.post("/hasil", { babId, nilai: skorAkhir });
    navigation.navigate("Hasil", { skor: skorAkhir });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Uji Kompetensi</Text>
      
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
    backgroundColor: '#F5F7FA',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    // Shadow untuk iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow untuk Android
    elevation: 3,
  },
  pertanyaan: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2C3E50',
    marginBottom: 15,
    fontWeight: '600',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
    backgroundColor: '#F9F9F9',
  },
  optionSelected: {
    borderColor: '#4A90E2',
    backgroundColor: '#EBF3FF',
  },
  optionText: {
    fontSize: 15,
    color: '#555',
  },
  textSelected: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#BDC3C7',
    marginRight: 10,
  },
  radioSelected: {
    borderColor: '#4A90E2',
    backgroundColor: '#4A90E2',
  }
});