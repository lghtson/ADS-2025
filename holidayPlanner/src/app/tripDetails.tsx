import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

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

const parseDisplayDate = (dateString: string) => {
  const parts = dateString.split(' ');

  if (parts.length !== 3) {
    return null;
  }

  const day = Number(parts[0]);
  const monthNames: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  const month = monthNames[parts[1]];
  const year = Number(parts[2]);

  if (Number.isNaN(day) || month === undefined || Number.isNaN(year)) {
    return null;
  }

  return new Date(year, month, day);
};

export default function TripDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const city = String(params.city || 'Trip Details');
  const country = String(params.country || '');
  const fromDate = String(params.fromDate || 'Not selected');
  const toDate = String(params.toDate || 'Not selected');
  const description = String(params.description || 'No city information available yet.');
  const budget = String(params.budget || params.budget_level || 'Not selected');
  const avgTripDays = String(params.avgTripDays || 'Not selected');

  const start = parseDisplayDate(fromDate);
  const end = parseDisplayDate(toDate);

  const calculatedTripLength =
    start && end
      ? Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)))
      : null;

  const tripLength = calculatedTripLength ? String(calculatedTripLength) : avgTripDays;
  const tripLengthLabel = calculatedTripLength ? `${calculatedTripLength} days` : avgTripDays;


  const image = String(params.image || '').replaceAll(' ', '');

  const tripImage = cityImages[image] || cityImages[city.replaceAll(' ', '')];

  return (
    <>
      <Stack.Screen options={{ title: 'Trip Details' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <Text style={styles.title}>{city}</Text>
      <Text style={styles.subtitle}>{country}</Text>
      <Text style={styles.dates}>{fromDate} - {toDate}</Text>

      {tripImage && (
        <Image source={tripImage} style={styles.heroImage} resizeMode="cover" />
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trip Summary</Text>
        <Text style={styles.sectionText}>{description}</Text>
        <Text style={styles.infoText}>Budget: {budget}</Text>
        <Text style={styles.infoText}>Trip length: {tripLengthLabel}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Pressable
          style={styles.actionButton}
          onPress={() => router.push({
            pathname: '/itinerary',
            params: { city, country, fromDate, toDate, description, image, budget, avgTripDays: tripLength },
          })}
        >
          <Text style={styles.actionText}>Create/View Itinerary</Text>
        </Pressable>

        <Pressable
          style={styles.actionButton}
          onPress={() => router.push({
            pathname: '/travelHub',
            params: { city, country, fromDate, toDate, description, image, budget, avgTripDays: tripLength },
          })}
        >
          <Text style={styles.actionText}>Travel Hub</Text>
        </Pressable>
      </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1EA',
  },
  content: {
    padding: 24,
    paddingBottom: 44,
  },
  title: {
    fontSize: 34,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    fontFamily: 'Outfit_700Bold',
    textAlign: 'center',
    marginTop: 2,
  },

  dates: {
    fontSize: 13,
    fontFamily: 'Outfit_700Bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 18,
  },

  heroImage: {
    width: '100%',
    height: 210,
    borderRadius: 14,
    marginBottom: 20,
  },

  section: {
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Outfit_900Black',
    marginBottom: 8,
    color: '#F6F1EA',
  },

  sectionText: {
    fontSize: 14,
    fontFamily: 'Outfit_700Bold',
    lineHeight: 20,
    marginBottom: 10,
    color: 'white',
  },

  infoText: {
    fontSize: 14,
    fontFamily: 'Outfit_900Black',
    lineHeight: 22,
    color: '#F1F6EA',
  },

  buttonGroup: {
    marginTop: 4,
    gap: 12,
  },

  actionButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  actionText: {
    color: '#F1F6EA',
    fontFamily: 'Outfit_900Black',
  },
});
