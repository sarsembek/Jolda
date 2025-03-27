// src/hooks/useLocationAddress.ts
import { useCurrentLocation } from './useCurrentLocation';
import { useReverseGeocodeAddress } from './useReverseGeocode';

/**
 * useLocationAddress
 * 
 * Combines useCurrentLocation (for lat/lng) and useReverseGeocodeAddress (for the address).
 * Returns a consolidated { address, error, loading } to show final location string.
 */
export function useLocationAddress() {
  // 1) get lat/lng from geolocation
  const { lat, lng, error: locError, loading: locLoading } = useCurrentLocation();

  // 2) pass lat/lng to the reverse geocode hook
  const { address, error: geoError, loading: geoLoading } = useReverseGeocodeAddress(lat, lng);

  // Consolidate error & loading states
  const error = locError || geoError;
  const loading = locLoading || geoLoading;

  return { address, error, loading };
}
