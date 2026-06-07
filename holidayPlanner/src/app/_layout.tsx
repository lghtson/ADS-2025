import { Stack } from 'expo-router';
import { TravelProvider } from '../context/travelContext';
import { useFonts } from 'expo-font';
import { Outfit_400Regular, Outfit_500Medium, Outfit_700Bold, Outfit_900Black } from '@expo-google-fonts/outfit';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
    Outfit_900Black,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <TravelProvider>
      <Stack screenOptions={{ headerShown: true }} />
    </TravelProvider>
  );
}