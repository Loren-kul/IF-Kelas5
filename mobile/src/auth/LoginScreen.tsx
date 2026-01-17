import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });

      await AsyncStorage.setItem("token", res.data.token);
      await AsyncStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "GURU") {
        navigation.replace("GuruHome");
      } else {
        navigation.replace("Semester");
      }
    } catch {
      Alert.alert("Login gagal", "Email atau password salah");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>

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
