import { View, Text, TextInput, Button } from "react-native";
import api from "../services/api";

export default function LoginScreen({ navigation }: any) {
  const login = async () => {
    const res = await api.post("/auth/login", {
      email: "siswa@mail.com",
      password: "123456",
    });

    if (res.data.token) {
      navigation.replace("Semester");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={login} />
    </View>
  );
}
