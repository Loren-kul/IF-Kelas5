import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function MateriScreen({ route, navigation }: any) {
  const { babId } = route.params;
  const [materi, setMateri] = useState([]);

  useEffect(() => {
    api.get(`/bab/${babId}/materi`)
      .then(res => setMateri(res.data));
  }, []);

  return (
    <View>
      <Text>Materi</Text>
      {materi.map((m: any) => (
        <View key={m.id}>
          <Text>{m.judul}</Text>
          <Text>{m.isi}</Text>
        </View>
      ))}

      <Button
        title="Mulai Latihan"
        onPress={() => navigation.navigate("SoalBab", { babId })}
      />
    </View>
  );
}
