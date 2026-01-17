import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import api from "../services/api";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      Alert.alert("Validasi", "Email dan password wajib diisi");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      console.log("LOGIN RESPONSE:", res.data);

      if (res.data.token) {
        Alert.alert("Login berhasil");
        navigation.replace("Semester", {
          token: res.data.token,
        });
      } else {
        Alert.alert("Login gagal", "Token tidak ditemukan");
      }
    } catch (err: any) {
      console.log("LOGIN ERROR:", err.response?.data || err.message);
      Alert.alert("Login gagal", "Email atau password salah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Login Siswa
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
          borderRadius: 5,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
          borderRadius: 5,
        }}
      />

      <Button
        title={loading ? "Loading..." : "Login"}
        onPress={login}
        disabled={loading}
      />
    </View>
  );
}
