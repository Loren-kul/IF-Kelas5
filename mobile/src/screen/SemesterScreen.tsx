import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SemesterScreen({ navigation }: any) {

  const logout = async () => {
    Alert.alert(
      "Logout",
      "Apakah kamu yakin ingin logout?",
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.clear();
            navigation.replace("Login");
          },
        },
      ]
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Pilih Semester
      </Text>

      {/* === tombol semester kamu (biarkan tetap) === */}
      <Button
        title="Semester 1"
        onPress={() => navigation.navigate("Semester1")}
      />

      {/* === LOGOUT === */}
      <View style={{ marginTop: 40 }}>
        <Button title="Logout" color="red" onPress={logout} />
      </View>
    </View>
  );
}
