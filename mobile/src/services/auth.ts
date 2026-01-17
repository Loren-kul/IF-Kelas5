import AsyncStorage from "@react-native-async-storage/async-storage";

export async function logout(navigation: any) {
  await AsyncStorage.clear();
  navigation.replace("Login");
}
