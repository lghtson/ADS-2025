import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Stack, router } from 'expo-router';
import { useTravel } from '../context/travelContext';

export default function rainScreen() {
  const { updateTravelData } = useTravel();
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Rain Preference' }}/>
      <Text style={styles.question}>What level of rain do you prefer?</Text>
      <Text style={styles.subtitle}>Choose the weather that feels right for your trip.</Text>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ rain: 'Heavy' });
        router.push('/humidity');
        }}
      >
      <Text style={styles.choices}>Heavy</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ rain: 'Often' });
        router.push('/humidity');
        }}
      >
      <Text style={styles.choices}>Often</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ rain: 'Average' });
        router.push('/humidity');
        }}
      >
      <Text style={styles.choices}>Average</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ rain: 'A little bit' });
        router.push('/humidity');
        }}
      >
      <Text style={styles.choices}>A little bit</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ rain: 'None at all' });
        router.push('/humidity');
        }}
      >
      <Text style={styles.choices}>None at all</Text>
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