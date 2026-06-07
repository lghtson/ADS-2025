import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router, Stack } from 'expo-router';

function OptionScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Choose Option' }} />

      <Text style={styles.title}>What would you like to do?</Text>
      <Text style={styles.subtitle}>Start a new travel match or return to your saved trips.</Text>

      <Pressable style={styles.choiceButton} onPress={() => router.push('/temp')}>
        <Text style={styles.choiceText}>Create New Trip</Text>
      </Pressable>

      <Pressable style={styles.choiceButton} onPress={() => router.push('/savedTrips')}>
        <Text style={styles.choiceText}>View Saved Trips</Text>
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
  choiceText: {
    color: '#F6F1EA',
    fontSize: 20,
    fontFamily: 'Outfit_900Black',
  },
});

export default OptionScreen;
