// src/hooks/useCurrentLocation.ts
import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

interface CurrentLocation {
  lat: number | null;
  lng: number | null;
  error: string | null;
  loading: boolean;
}

/**
 * Hook to request the user's current geolocation (lat, lng).
 */
export function useCurrentLocation(): CurrentLocation {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // iOS only: request auth. For Android, ensure permissions in Manifest + possibly runtime.
    Geolocation.requestAuthorization();

    Geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setLoading(false);
      },
      err => {
        console.log('Geolocation error:', err);
        setError('Не удалось определить местоположение');
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  }, []);

  return { lat, lng, error, loading };
}
