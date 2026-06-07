import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Stack, router } from 'expo-router';
import { useTravel } from '../context/travelContext';

export default function tempScreen() {
  const { updateTravelData } = useTravel();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Temp Preference' }}/>
      <Text style={styles.question}>What temperature do you prefer?</Text>
      <Text style={styles.subtitle}>Choose the climate that sounds best for your trip.</Text>
      
      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ temperature: 'Hot' });
        router.push('/rain');
        }}
      >
      <Text style={styles.choices}>Hot</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ temperature: 'Warm' });
        router.push('/rain');
        }}
      >
      <Text style={styles.choices}>Warm</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ temperature: 'Mild' });
        router.push('/rain');
        }}
      >
      <Text style={styles.choices}>Mild</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ temperature: 'Cold' });
        router.push('/rain');
        }}
      >
      <Text style={styles.choices}>Cold</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ temperature: 'Freezing' });
        router.push('/rain');
        }}
      >
      <Text style={styles.choices}>Freezing</Text>
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