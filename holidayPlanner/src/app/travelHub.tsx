import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

function TravelHubScreen() {
  const params = useLocalSearchParams();
  const city = params.city;
  const country = params.country;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: 'Travel Hub' }} />

      <Text style={styles.title}>Travel Hub</Text>
      <Text style={styles.subtitle}>
        Useful travel details for {city}{country ? `, ${country}` : ''}.
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Tickets</Text>
        <Text style={styles.sectionText}>Upload/store ticket placeholder</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Coming soon</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Currency</Text>
        <Text style={styles.sectionText}>Destination currency placeholder</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Coming soon</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Emergency</Text>
        <Text style={styles.sectionText}>Local emergency number placeholder</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Coming soon</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Map</Text>
        <Text style={styles.sectionText}>Offline map placeholder</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Coming soon</Text>
        </Pressable>
      </View>
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
    fontSize: 32,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Outfit_500Medium',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Outfit_900Black',
    marginBottom: 6,
    color: '#F6F1EA',
  },
  sectionText: {
    fontSize: 15,
    fontFamily: 'Outfit_500Medium',
    lineHeight: 22,
    marginBottom: 12,
    color: '#F6F1EA',
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

export default TravelHubScreen;