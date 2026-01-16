import { View, Text, Button } from "react-native";
import api from "../services/api";
import { useEffect, useState } from "react";

export default function SemesterScreen({ navigation }: any) {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/semester").then(res => setData(res.data));
  }, []);

  return (
    <View>
      <Text>Daftar Semester</Text>
      {data.map((s: any) => (
        <Button
          key={s.id}
          title={s.nama}
          onPress={() => navigation.navigate("Bab", { id: s.id })}
        />
      ))}
    </View>
  );
}
