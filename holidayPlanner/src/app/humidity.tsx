import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Stack, router } from 'expo-router';
import { useTravel } from '../context/travelContext';

export default function humidityScreen() {
  const { updateTravelData } = useTravel();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Humidity Preference' }}/>
      <Text style={styles.question}>What level of humidity do you prefer?</Text>
      <Text style={styles.subtitle}>Choose the climate that feels most comfortable for your trip.</Text>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ humidity: '71-100%' });
        router.push('/budget');
        }}
      >
      <Text style={styles.choices}>71-100% (e.g. Singapore)</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ humidity: '51-70%' });
        router.push('/budget');
        }}
      >
      <Text style={styles.choices}>51-70% (e.g. Tokyo)</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ humidity: '31-50%' });
        router.push('/budget');
        }}
      >
      <Text style={styles.choices}>31-50% (e.g. Barcelona)</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ humidity: '<30%' });
        router.push('/budget');
        }}
      >
      <Text style={styles.choices}>{'<30% (e.g. Las Vegas)'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1EA',
    padding: 24,
    justifyContent: 'center',
  },

  question: {
    fontSize: 32,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'Outfit_500Medium',
    textAlign: 'center',
    marginBottom: 30,
  },

  choiceButton: {
    backgroundColor: '#111',
    paddingVertical: 18,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: 'center',
  },

  choices: {
    color: '#F6F1EA',
    fontSize: 20,
    fontFamily: 'Outfit_900Black',
  },
});