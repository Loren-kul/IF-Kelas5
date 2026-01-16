import { StatusBar } from 'expo-status-bar';
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <>
      {/* StatusBar mengatur tampilan indikator baterai/jam di bagian atas HP */}
      <StatusBar style="auto" />
      
      {/* AppNavigator adalah kontainer utama yang berisi semua halaman aplikasi */}
      <AppNavigator />
    </>
  );
}