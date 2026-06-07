import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TravelData = {
  temperature: string;
  rain: string;
  humidity: string;
  fromDate: string;
  toDate: string;
  budget: string;
};

export type SavedTrip = {
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

type TravelContextType = {
  travelData: TravelData;
  updateTravelData: (data: Partial<TravelData>) => void;
  savedTrips: SavedTrip[];
  saveTrip: (trip: SavedTrip) => Promise<void>;
  removeTrip: (id: string) => Promise<void>;
};

const TravelContext = createContext<TravelContextType | undefined>(undefined);

export function TravelProvider({ children }: { children: React.ReactNode }) {
  const [travelData, setTravelData] = useState<TravelData>({
    temperature: '',
    rain: '',
    humidity: '',
    fromDate: '',
    toDate: '',
    budget: '',
  });

  const [savedTrips, setSavedTrips] = useState<SavedTrip[]>([]);

  useEffect(() => {
    loadSavedTrips();
  }, []);

  const loadSavedTrips = async () => {
    const storedTrips = await AsyncStorage.getItem('savedTrips');

    if (storedTrips) {
      setSavedTrips(JSON.parse(storedTrips));
    }
  };

  const updateTravelData = (data: Partial<TravelData>) => {
    setTravelData(prev => ({
      ...prev,
      ...data,
    }));
  };

  const saveTrip = async (trip: SavedTrip) => {
    const updatedTrips = [...savedTrips, trip];

    setSavedTrips(updatedTrips);
    await AsyncStorage.setItem('savedTrips', JSON.stringify(updatedTrips));
  };

  const removeTrip = async (id: string) => {
    const updatedTrips = savedTrips.filter(trip => trip.id !== id);

    setSavedTrips(updatedTrips);
    await AsyncStorage.setItem('savedTrips', JSON.stringify(updatedTrips));
  };

  return (
    <TravelContext.Provider
      value={{
        travelData,
        updateTravelData,
        savedTrips,
        saveTrip,
        removeTrip,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
}

export function useTravel() {
  const context = useContext(TravelContext);

  if (!context) {
    throw new Error('useTravel must be used inside TravelProvider');
  }

  return context;
}