import { View, Text, StyleSheet } from "react-native";

export default function UASSemester1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UAS Semester 1</Text>
      <Text>Kerjakan soal dengan teliti.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: "bold" },
});
