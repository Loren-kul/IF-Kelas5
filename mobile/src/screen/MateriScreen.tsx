import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";
import Card from "../components/Card";
import Button from "../components/Button";

export default function MateriScreen({ route, navigation }: any) {
  const { babId } = route.params;
  const [materi, setMateri] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/bab/${babId}/materi`)
      .then((res) => setMateri(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [babId]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Memuat materi...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Materi Pembelajaran</Text>

      {materi.map((m) => (
        <Card
          key={m.id}
          title={m.judul}
          description={m.isi}
          style={styles.card}
        />
      ))}

      <Button
        title="Mulai Latihan"
        onPress={() => navigation.navigate("SoalBab", { babId })}
        style={styles.button}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  card: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});
