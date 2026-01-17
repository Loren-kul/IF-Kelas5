import { ScrollView, Text, StyleSheet } from "react-native";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

export default function Bab1Semester1({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bab 1: Analisis Data</Text>

      <Card
        title="Pengertian Data"
        description="Data adalah kumpulan informasi yang dapat diolah."
      />

      <Card
        title="Contoh Data"
        description="Jumlah siswa, nilai ulangan, tinggi badan."
      />

      <Button
        title="Kerjakan Latihan"
        onPress={() => navigation.navigate("SoalBab1Semester1")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
