import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";

enableScreens(); // ⬅️ WAJIB

import LoginScreen from "../screen/LoginScreen";
import SemesterScreen from "../screen/SemesterScreen";
import BabScreen from "../screen/BabScreen";
import MateriScreen from "../screen/MateriScreen";
import SoalBabScreen from "../screen/SoalBabScreen";
import UASScreen from "../screen/UASScreen";
import HasilScreen from "../screen/HasilScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Semester" component={SemesterScreen} />
        <Stack.Screen name="Bab" component={BabScreen} />
        <Stack.Screen name="Materi" component={MateriScreen} />
        <Stack.Screen name="SoalBab" component={SoalBabScreen} />
        <Stack.Screen name="UAS" component={UASScreen} />
        <Stack.Screen name="Hasil" component={HasilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
