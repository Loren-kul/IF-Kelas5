import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import api from "../services/api";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        Alert.alert("Login berhasil");
        navigation.replace("Semester");
      } else {
        Alert.alert("Login gagal");
      }
    } catch (err: any) {
      Alert.alert("Error", "Email atau password salah");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login Siswa</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Login" onPress={login} />
    </View>
  );
}
