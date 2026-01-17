import { View, Text, StyleSheet } from "react-native";
import Card from "../../../components/Card";

export default function Semester1Screen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Semester 1</Text>

      <Card
        title="Bab 1: Analisis Data"
        description="Mengenal dan mengolah data sederhana"
        onPress={() => navigation.navigate("Bab1Semester1")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
});
