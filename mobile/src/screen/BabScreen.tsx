import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function BabScreen({ route, navigation }: any) {
  const { semesterId } = route.params;
  const [bab, setBab] = useState([]);

  useEffect(() => {
    api.get(`/semester/${semesterId}/bab`)
      .then(res => setBab(res.data));
  }, []);

  return (
    <View>
      <Text>Daftar Bab</Text>
      {bab.map((b: any) => (
        <Button
          key={b.id}
          title={b.judul}
          onPress={() => navigation.navigate("Materi", { babId: b.id })}
        />
      ))}
    </View>
  );
}
