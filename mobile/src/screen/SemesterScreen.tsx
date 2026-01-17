import { View, Text, Button, ActivityIndicator, Alert } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function SemesterScreen({ navigation, route }: any) {
  const { token } = route.params; // ← token dari login

  const [semester, setSemester] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadSemester = async () => {
    try {
      const res = await api.get("/semester", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("SEMESTER:", res.data);
      setSemester(res.data);
    } catch (err: any) {
      console.log("ERROR SEMESTER:", err.response?.data || err.message);
      Alert.alert("Error", "Gagal mengambil data semester");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSemester();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Pilih Semester
      </Text>

      {semester.map((s) => (
        <Button
          key={s.id}
          title={s.nama}
          onPress={() =>
            navigation.navigate("Bab", {
              semesterId: s.id,
              token,
            })
          }
        />
      ))}
    </View>
  );
}
