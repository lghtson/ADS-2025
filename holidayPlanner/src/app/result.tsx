import { View, ScrollView, Text, StyleSheet, Pressable, Image } from 'react-native';
import cities from '../data/cities_dataset.json';
import { useTravel } from '../context/travelContext';
import { Stack, useRouter } from 'expo-router';

export default function ResultScreen() {
  const router = useRouter();
  const { travelData, saveTrip } = useTravel();
  const map = require('../assets/images/map.png');

  const cityImages: Record<string, any> = {
    Tokyo: require('../assets/images/cities/tokyo.png'),
    Seoul: require('../assets/images/cities/seoul.png'),
    Bangkok: require('../assets/images/cities/bangkok.png'),
    ChiangMai: require('../assets/images/cities/chiangMai.png'),
    Hanoi: require('../assets/images/cities/hanoi.png'),
    Bali: require('../assets/images/cities/bali.png'),
    Singapore: require('../assets/images/cities/singapore.png'),
    KualaLumpur: require('../assets/images/cities/kualaLumpur.png'),
    Dubai: require('../assets/images/cities/dubai.png'),
    Istanbul: require('../assets/images/cities/istanbul.png'),
    Athens: require('../assets/images/cities/athens.png'),
    Lisbon: require('../assets/images/cities/lisbon.png'),
    Porto: require('../assets/images/cities/porto.png'),
    Madrid: require('../assets/images/cities/madrid.png'),
    Barcelona: require('../assets/images/cities/barcelona.png'),
    Valencia: require('../assets/images/cities/valencia.png'),
    Paris: require('../assets/images/cities/paris.png'),
    Lyon: require('../assets/images/cities/lyon.png'),
    Amsterdam: require('../assets/images/cities/amsterdam.png'),
    Copenhagen: require('../assets/images/cities/copenhagen.png'),
    Stockholm: require('../assets/images/cities/stockholm.png'),
    Reykjavik: require('../assets/images/cities/reykjavik.png'),
    London: require('../assets/images/cities/london.png'),
    Edinburgh: require('../assets/images/cities/edinburgh.png'),
    Dublin: require('../assets/images/cities/dublin.png'),
    Rome: require('../assets/images/cities/rome.png'),
    Florence: require('../assets/images/cities/florence.png'),
    Milan: require('../assets/images/cities/milan.png'),
    Venice: require('../assets/images/cities/venice.png'),
    Prague: require('../assets/images/cities/prague.png'),
    Budapest: require('../assets/images/cities/budapest.png'),
    Vienna: require('../assets/images/cities/vienna.png'),
    Berlin: require('../assets/images/cities/berlin.png'),
    Munich: require('../assets/images/cities/munich.png'),
    Krakow: require('../assets/images/cities/krakow.png'),
    Warsaw: require('../assets/images/cities/warsaw.png'),
    Dubrovnik: require('../assets/images/cities/dubrovnik.png'),
    Split: require('../assets/images/cities/split.png'),
    Marrakech: require('../assets/images/cities/marrakech.png'),
    Casablanca: require('../assets/images/cities/casablanca.png'),
    Cairo: require('../assets/images/cities/cairo.png'),
    CapeTown: require('../assets/images/cities/capeTown.png'),
    Nairobi: require('../assets/images/cities/nairobi.png'),
    ZanzibarCity: require('../assets/images/cities/zanzibar.png'),
    NewYorkCity: require('../assets/images/cities/nyc.png'),
    LosAngeles: require('../assets/images/cities/la.png'),
    SanFrancisco: require('../assets/images/cities/sanFrancisco.png'),
    Miami: require('../assets/images/cities/miami.png'),
    Toronto: require('../assets/images/cities/toronto.png'),
    MexicoCity: require('../assets/images/cities/mexicoCity.png'),
    Oaxaca: require('../assets/images/cities/oaxaca.png'),
    RiodeJaneiro: require('../assets/images/cities/rdj.png'),
    BuenosAires: require('../assets/images/cities/buenosAires.png'),
    Lima: require('../assets/images/cities/lima.png'),
    Cusco: require('../assets/images/cities/cusco.png'),
    Bogota: require('../assets/images/cities/bogota.png'),
    Medellin: require('../assets/images/cities/medellin.png'),
    Sydney: require('../assets/images/cities/sydney.png'),
    Melbourne: require('../assets/images/cities/melbourne.png'),
    Tromso: require('../assets/images/cities/tromso.png'),
    Rovaniemi: require('../assets/images/cities/rovaniemi.png'),
    Helsinki: require('../assets/images/cities/helsinki.png'),
    Oslo: require('../assets/images/cities/oslo.png'),
    Tallinn: require('../assets/images/cities/tallinn.png'),
    Riga: require('../assets/images/cities/riga.png'),
    Vilnius: require('../assets/images/cities/vilnius.png'),
    Nuuk: require('../assets/images/cities/nuuk.png'),
    Yellowknife: require('../assets/images/cities/yellowknife.png'),
    Banff: require('../assets/images/cities/banff.png'),
    Sapporo: require('../assets/images/cities/sapporo.png'),
    Innsbruck: require('../assets/images/cities/innsbruck.png'),
  };

  const matches = cities.filter(
    city =>
      city.temperature === travelData.temperature &&
      city.rainfall === travelData.rain &&
      city.humidity === travelData.humidity
  );

  const fallbackMatches = cities.filter(
    city => city.temperature === travelData.temperature
  );

  const results = matches.length > 0 ? matches : fallbackMatches;

  if (results.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text style={styles.title}>We couldn't find a perfect match</Text>
        <Text style={styles.text}>Try adjusting your weather preferences to discover more destinations.</Text>

        <Pressable style={styles.bigButton} onPress={() => router.replace('/temp')}>
          <Text style={styles.bigButtonText}>Try Again</Text>
        </Pressable>
      </View>
    );
  }

  const city = results[Math.floor(Math.random() * results.length)];

  const formatTripDate = (date: string) => {
    if (!date) return 'Not selected';

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const formattedFromDate = formatTripDate(travelData.fromDate);
  const formattedToDate = formatTripDate(travelData.toDate);
  const cityImageKey = city.city.replaceAll(' ', '');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.mapBox}>
        <Image source={map} style={styles.mapBox} />
      </View>

      <View style={styles.heroSection}>
        <View style={styles.pinCircle}>
          <Text style={styles.pinText}>🌎</Text>
        </View>

        <Pressable style={styles.redButton} onPress={() => router.replace('/temp')}>
          <Text style={styles.smallButtonText}>Start over</Text>
        </Pressable>
      </View>

      <Text style={styles.smallTitle}>Your location is...</Text>
      <Text style={styles.cityTitle}>{city.city}, {city.country}</Text>
      <Text style={styles.miniText}>From: {formattedFromDate}</Text>
      <Text style={styles.miniText}>To: {formattedToDate}</Text>

      <View style={styles.imageBox}>
        <Image source={cityImages[cityImageKey] || cityImages[city.city]} style={styles.cityImage} resizeMode="cover" />
      </View>

      <View style={styles.reasonBox}>
        <Text style={styles.reasonHeading}>Why this location?</Text>
        <Text style={styles.reasonText}>{city.description}</Text>
      </View>

      <View style={styles.grid}>
        <InfoCard title="Budgeting level: " value={city.budget_level} />
        <InfoCard title="Best season: " value={city.best_season} />
        <InfoCard title="Travel style: " value={city.travel_style} />
        <InfoCard title="Best for: " value={city.ideal_for} />
        <InfoCard title="Temp. level: " value={city.temperature} />
        <InfoCard title="Rainfall level: " value={city.rainfall} />
        <InfoCard title="Humidity level: " value={city.humidity} />
        <InfoCard title="Average trip length: " value={`${city.avg_trip_days} days`} />
      </View>

      <Text style={styles.bookingTitle}>Want to save this trip?</Text>
      <Pressable
        style={styles.bigButton}
        onPress={() => {
          saveTrip({
            id: `${city.city}-${Date.now()}`,
            city: city.city,
            country: city.country,
            fromDate: formattedFromDate,
            toDate: formattedToDate,
            description: city.description,
            image: cityImageKey,
            budget: city.budget_level,
            avgTripDays: city.avg_trip_days,
          });

          router.replace('/savedTrips');
        }}
      >
        <Text style={styles.bigButtonText}>Save {city.city} trip</Text>
      </Pressable>
    </ScrollView>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1EA',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#F6F1EA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
  },
  mapBox: {
    width: '100%',
    height: 145,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroSection: {
    width: '100%',
    alignItems: 'center',
    marginTop: -45,
    marginBottom: 10,
  },
  redButton: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 12,
  },
  smallButtonText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Outfit_900Black',
  },
  pinCircle: {
    width: 95,
    height: 95,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinText: {
    fontSize: 42,
  },
  smallTitle: {
    marginTop: 18,
    fontSize: 18,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
  },
  cityTitle: {
    fontSize: 23,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
    marginBottom: 6,
  },
  miniText: {
    fontSize: 12,
    fontFamily: 'Outfit_700Bold',
    textAlign: 'center',
    marginTop: 2,
  },
  imageBox: {
    width: '80%',
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 16,
  },
  reasonBox: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 6,
    padding: 14,
    marginTop: 32,
  },
  reasonHeading: {
    fontSize: 11,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
    color: '#F6F1EA',
  },
  reasonText: {
    fontSize: 13,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
    marginTop: 4,
    color: '#F6F1EA',
  },
  grid: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  card: {
    width: '48%',
    minHeight: 96,
    backgroundColor: 'black',
    borderRadius: 6,
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
    color: '#F6F1EA'
  },
  cardValue: {
    fontSize: 13,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
    marginTop: 5,
    color: '#F6F1EA'
  },
  bookingTitle: {
    marginTop: 25,
    fontSize: 18,
    fontFamily: 'Outfit_900Black',
  },
  bigButton: {
    width: '76%',
    backgroundColor: 'black',
    paddingVertical: 18,
    borderRadius: 6,
    marginTop: 18,
    alignItems: 'center',
  },
  bigButtonText: {
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
    color: '#F6F1EA',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Outfit_700Bold',
  },
  cityImage: {
    width: '100%',
    height: '100%',
  },
});