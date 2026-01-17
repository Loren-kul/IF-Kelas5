import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";

enableScreens(); // ⬅️ WAJIB

// ===== SCREEN UMUM (LAMA) =====
import LoginScreen from "../auth/LoginScreen";
import SemesterScreen from "../screen/SemesterScreen";
import BabScreen from "../screen/BabScreen";
import MateriScreen from "../screen/MateriScreen";
import SoalBabScreen from "../screen/SoalBabScreen";
import UASScreen from "../screen/UASScreen";
import HasilScreen from "../screen/HasilScreen";

// ===== SCREEN MATERI BARU (SEMESTER 1) =====
import Semester1Screen from "../screen/materi/semester1";
import Bab1Semester1 from "../screen/materi/semester1/bab1";
import SoalBab1Semester1 from "../screen/materi/semester1/soal-bab1";
import UASSemester1 from "../screen/materi/uas/uas-semester1";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>

        {/* AUTH */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* MENU SEMESTER */}
        <Stack.Screen
          name="Semester"
          component={SemesterScreen}
          options={{ title: "Pilih Semester" }}
        />

        {/* ===== SEMESTER 1 (BARU) ===== */}
        <Stack.Screen
          name="Semester1"
          component={Semester1Screen}
          options={{ title: "Semester 1" }}
        />

        <Stack.Screen
          name="Bab1Semester1"
          component={Bab1Semester1}
          options={{ title: "Bab 1 - Analisis Data" }}
        />

        <Stack.Screen
          name="SoalBab1Semester1"
          component={SoalBab1Semester1}
          options={{ title: "Latihan Bab 1" }}
        />

        <Stack.Screen
          name="UASSemester1"
          component={UASSemester1}
          options={{ title: "UAS Semester 1" }}
        />

        {/* ===== SCREEN LAMA SEMENTARA MASIH DIPAKAI ===== */}
        <Stack.Screen name="Bab" component={BabScreen} />
        <Stack.Screen name="Materi" component={MateriScreen} />
        <Stack.Screen name="SoalBab" component={SoalBabScreen} />
        <Stack.Screen name="UAS" component={UASScreen} />
        <Stack.Screen name="Hasil" component={HasilScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
