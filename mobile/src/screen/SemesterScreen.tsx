import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function SemesterScreen({ navigation }: any) {
  const [semester, setSemester] = useState([]);

  useEffect(() => {
    api.get("/semester").then(res => setSemester(res.data));
  }, []);

  return (
    <View>
      <Text>Semester</Text>
      {semester.map((s: any) => (
        <Button
          key={s.id}
          title={s.nama}
          onPress={() => navigation.navigate("Bab", { semesterId: s.id })}
        />
      ))}
    </View>
  );
}
