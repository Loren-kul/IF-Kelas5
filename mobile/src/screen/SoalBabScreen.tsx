import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function SoalBabScreen({ route, navigation }: any) {
  const { babId } = route.params;
  const [soal, setSoal] = useState([]);

  useEffect(() => {
    api.get(`/bab/${babId}/soal`)
      .then(res => setSoal(res.data));
  }, []);

  const submit = async () => {
    await api.post("/hasil", {
      babId,
      nilai: 80,
    });
    navigation.navigate("Hasil");
  };

  return (
    <View>
      <Text>Soal Latihan</Text>
      {soal.map((s: any, i: number) => (
        <View key={s.id}>
          <Text>{i + 1}. {s.pertanyaan}</Text>
        </View>
      ))}
      <Button title="Kirim Jawaban" onPress={submit} />
    </View>
  );
}
