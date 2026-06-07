import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { Stack, router } from 'expo-router';
import { useTravel } from '../context/travelContext';

export default function dateScreen() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  const { updateTravelData } = useTravel();

  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Travel Dates' }} />
      <Text style={styles.title}>What is your budget?</Text>
      
      <Text style={styles.text}>From:</Text>
      <Pressable style={styles.dateBox} onPress={() => setShowFromPicker(true)}>
        <Text style={styles.text}>{fromDate.toDateString()}</Text>
      </Pressable>

      {showFromPicker && (
        <DateTimePicker
          value={fromDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          minimumDate={new Date()}
          onChange={(event, selectedDate) => {
            setShowFromPicker(false);
            if (selectedDate) {
              setFromDate(selectedDate);
              if (selectedDate > toDate) {
                setToDate(selectedDate);
              }
            }
          }}
        />
      )}

      <Text style={styles.text}>To:</Text>
      <Pressable style={styles.dateBox} onPress={() => setShowToPicker(true)}>
        <Text style={styles.text}>{toDate.toDateString()}</Text>
      </Pressable>

      {showToPicker && (
        <DateTimePicker
          value={toDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          minimumDate={fromDate}
          onChange={(event, selectedDate) => {
            setShowToPicker(false);
            if (selectedDate) {
              setToDate(selectedDate);
            }
          }}
        />
      )}
      <Pressable style={styles.button} onPress={() => {
        updateTravelData({
          fromDate: fromDate.toISOString(),
          toDate: toDate.toISOString(),
        });
        router.replace('/loading');
  }}
>
  <Text style={styles.buttonText}>Continue</Text>
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
    gap: 16,
  },

  title: {
    fontSize: 32,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
    marginBottom: 10,
  },

  dateBox: {
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#111',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  text: {
    fontSize: 20,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
  },

  buttonText: {
    color: '#F6F1EA',
    fontSize: 17,
    fontFamily: 'Outfit_900Black',
  },
});