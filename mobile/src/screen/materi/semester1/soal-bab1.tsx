import { View, Text, StyleSheet } from "react-native";
import Card from "../../../components/Card";

export default function SoalBab1Semester1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latihan Bab 1</Text>

      <Card
        title="Soal 1"
        description="Apa yang dimaksud dengan data?"
      />

      <Card
        title="Soal 2"
        description="Sebutkan contoh data di sekolah!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
});
