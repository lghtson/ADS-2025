
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useTravel } from '../context/travelContext';
import { Stack, useRouter } from 'expo-router';

type SavedTrip = {
  id: string;
  city: string;
  country: string;
  fromDate: string;
  toDate: string;
  description: string;
  image?: string;
  budget?: string;
  avgTripDays?: number;
};

export default function SavedTripsScreen() {
  const { savedTrips, removeTrip } = useTravel();
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>Saved Trips</Text>

      {savedTrips.length === 0 ? (
        <>
          <Text style={styles.emptyText}>You have no saved trips yet.</Text>
        </>
      ) : (
        savedTrips.map((trip: SavedTrip) => (
          <View key={trip.id} style={styles.card}>
            <Text style={styles.city}>{trip.city}, {trip.country}</Text>
            <Text style={styles.date}>From: {trip.fromDate}</Text>
            <Text style={styles.date}>To: {trip.toDate}</Text>
            <Text style={styles.description}>{trip.description}</Text>

            <Pressable
              style={styles.viewButton}
              onPress={() =>
                router.push({
                  pathname: '/tripDetails',
                  params: {
                    city: trip.city,
                    country: trip.country,
                    fromDate: trip.fromDate,
                    toDate: trip.toDate,
                    description: trip.description,
                    image: trip.image,
                    budget: trip.budget,
                    avgTripDays: trip.avgTripDays,
                  }
                })
              }
            >
              <Text style={styles.viewText}>View Trip Details</Text>
            </Pressable>

            <Pressable style={styles.deleteButton} onPress={() => removeTrip(trip.id)}>
              <Text style={styles.deleteText}>Remove Trip</Text>
            </Pressable>
          </View>
        ))
      )}

      <Pressable
        style={styles.addTripButton}
        onPress={() => router.push('/temp')}
      >
        <Text style={styles.addTripText}>+ Add New Trip</Text>
      </Pressable>

      <Pressable
        style={styles.logoutButton}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1EA',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 40,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontFamily: 'Outfit_900Black',
    marginBottom: 24,
  },

  emptyText: {
    fontSize: 16,
    fontFamily: 'Outfit_700Bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },

  city: {
    fontSize: 20,
    fontFamily: 'Outfit_900Black',
    marginBottom: 8,
    color: '#F6F1EA'
  },

  date: {
    fontSize: 13,
    fontFamily: 'Outfit_700Bold',
    color: '#F6F1EA'
  },

  description: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Outfit_500Medium',
    color: '#F6F1EA'
  },

  button: {
    backgroundColor: '#F6F1EA',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: 'Outfit_900Black',
    fontSize: 16,
  },

  addTripButton: {
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderColor: '#111',
  },

  addTripText: {
    color: '#F6F1EA',
    fontFamily: 'Outfit_900Black',
    fontSize: 16,
  },

  logoutButton: {
    marginTop: 12,
    backgroundColor: 'black',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  logoutText: {
    color: '#F6F1EA',
    fontFamily: 'Outfit_900Black',
    fontSize: 16,
  },

  viewButton: {
    marginTop: 14,
    backgroundColor: '#F6F1EA',
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  viewText: {
    fontFamily: 'Outfit_900Black',
  },

  deleteButton: {
    marginTop: 8,
    backgroundColor: '#F6F1EA',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  deleteText: {
    fontFamily: 'Outfit_900Black',
  },
});