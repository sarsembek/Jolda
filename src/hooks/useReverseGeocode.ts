import { useState, useEffect } from 'react';
import axios from 'axios';
import Config from 'react-native-config';

interface ReverseGeocodeResult {
  address: string | null;
  error: string | null;
  loading: boolean;
}

/**
 * Hook to fetch street name and number. Falls back to `formatted_address` if components are missing.
 */
export function useReverseGeocodeAddress(
  lat: number | null,
  lng: number | null
): ReverseGeocodeResult {
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (lat == null || lng == null) return; // Skip if no coordinates

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
          let streetName = '';

          // Extract 'route' (street name) and 'street_number'
          components.forEach((comp: any) => {
            if (comp.types.includes('route')) {
              streetName = comp.long_name;
            }
            if (comp.types.includes('street_number')) {
              streetNumber = comp.long_name;
            }
          });

          // If we have both components, return "StreetNumber StreetName"
          if (streetNumber && streetName) {
            setAddress(`${streetName} ${streetNumber}`);
          } else {
            // Fallback: Use formatted_address from the API response
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
