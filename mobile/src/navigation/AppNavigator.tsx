import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SemesterScreen from "../screens/SemesterScreen";
import BabScreen from "../screens/BabScreen";
import MateriScreen from "../screens/MateriScreen";
import SoalBabScreen from "../screens/SoalBabScreen";
import UASScreen from "../screens/UASScreen";
import HasilScreen from "../screens/HasilScreen";

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
