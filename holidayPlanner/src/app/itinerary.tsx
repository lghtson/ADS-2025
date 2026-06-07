import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

function ItineraryScreen() {
  const params = useLocalSearchParams();
  const city = String(params.city || 'Trip');
  const rawTripDays = String(params.avgTripDays || params.avg_trip_days || '4');
  const parsedTripDays = parseInt(rawTripDays, 10);
  const avgTripDays = Number.isNaN(parsedTripDays) || parsedTripDays < 1 ? 4 : parsedTripDays;

  const itineraryIdeas = [
    'Arrive, check in, explore the city centre and have a casual dinner.',
    'Visit the main landmarks, try a popular food spot and go for an evening walk.',
    'Have a museum/culture day, go shopping or explore a local neighbourhood.',
    'Take a relaxed final day, visit a viewpoint or plan an optional day trip.',
    'Explore somewhere outside the centre, visit markets, parks or nearby attractions.',
    'Spend the day doing slower activities like cafes, photos, souvenirs and local food.',
    'Wrap up the trip, revisit favourite areas and prepare for the journey home.',
  ];

  const days = Array.from({ length: avgTripDays }, (_, index) => ({
    day: index + 1,
    text: itineraryIdeas[index] || 'Free day to explore, relax or add your own plans.',
  }));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: 'Itinerary' }} />
      <Text style={styles.title}>{city} Itinerary</Text>

      {days.map((item) => (
        <View key={item.day} style={styles.card}>
          <Text style={styles.dayTitle}>Day {item.day}</Text>
          <Text style={styles.dayText}>{item.text}</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Coming soon</Text>
        </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1EA',
  },
  content: {
    padding: 20,
    paddingTop: 28,
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Outfit_900Black',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  dayTitle: {
    fontSize: 20,
    fontFamily: 'Outfit_700Bold',
    marginBottom: 8,
    color: '#F6F1EA'
  },
  dayText: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Outfit_500Medium',
    marginBottom: 8,
    color: '#F6F1EA'
  },
  button: {
    backgroundColor: '#F6F1EA',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Outfit_900Black',
  },
});

export default ItineraryScreen;