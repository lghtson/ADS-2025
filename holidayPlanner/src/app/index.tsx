import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Text style={styles.title}>AllAbroad</Text>
      <Text style={styles.subtitle}>Plan your next trip!</Text>

      <Pressable style={styles.button} onPress={() => router.replace('/login')}>
        <Text style={styles.buttonText}>Get Started!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F6F1EA',
  },

  title: {
    fontSize: 34,
    textAlign: 'center',
    fontFamily: 'Outfit_900Black',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    fontFamily: 'Outfit_500Medium',
    textAlign: 'center',
    marginBottom: 32,
  },

  button: {
    backgroundColor: '#111',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#F6F1EA',
    fontSize: 17,
    fontFamily: 'Outfit_900Black',
  },
});