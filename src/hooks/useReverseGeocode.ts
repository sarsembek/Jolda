// src/hooks/useReverseGeocodeAddress.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import Config from 'react-native-config';

interface ReverseGeocodeResult {
  address: string | null;
  error: string | null;
  loading: boolean;
}

/**
 * Given latitude and longitude, calls Google Maps Geocoding (lang=ru)
 * to retrieve an address built from street_number + route.
 */
export function useReverseGeocodeAddress(
  lat: number | null,
  lng: number | null
): ReverseGeocodeResult {
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (lat == null || lng == null) return; // skip if no coords

    const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
    const apiKey = Config.GOOGLE_MAPS_API_KEY;
    const url = `${baseUrl}?latlng=${lat},${lng}&key=${apiKey}&language=ru`;

    const fetchAddress = async () => {
      setLoading(true);
      setError(null);
      setAddress(null);

      try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === 'OK' && data.results?.length > 0) {
          const components = data.results[0].address_components;
          let streetNumber = '';
          let routeName = '';

          // Attempt to extract 'street_number' + 'route'
          components.forEach((comp: any) => {
            if (comp.types.includes('street_number')) {
              streetNumber = comp.long_name;
            }
            if (comp.types.includes('route')) {
              routeName = comp.long_name;
            }
          });

          if (streetNumber && routeName) {
            setAddress(`${streetNumber} ${routeName}`);
          } else {
            // fallback to formatted_address
            setAddress(data.results[0].formatted_address);
          }
        } else {
          setError(`Google API returned status: ${data.status}`);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, [lat, lng]);

  return { address, error, loading };
}
