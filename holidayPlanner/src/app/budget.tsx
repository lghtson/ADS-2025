

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useTravel } from '../context/travelContext';

function BudgetScreen() {
  const { updateTravelData } = useTravel();

  const chooseBudget = (budget: string) => {
    updateTravelData({ budget });
    router.push('/date');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your budget?</Text>
      <Text style={styles.subtitle}>Choose how much you want to spend on this trip.</Text>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ budget: 'Low' });
        router.push('/date');
        }}
      >
      <Text style={styles.choices}>Low</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ budget: 'Medium' });
        router.push('/date');
        }}
      >
      <Text style={styles.choices}>Medium</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => {
        updateTravelData({ budget: 'High' });
        router.push('/date');
        }}
      >
      <Text style={styles.choices}>High</Text>
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
  title: {
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

export default BudgetScreen;