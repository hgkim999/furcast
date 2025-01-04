import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [requestingPermission, setRequestingPermission] = useState(false);

  useEffect(() => {
    async function getCurrentLocation() {
      setRequestingPermission(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      setRequestingPermission(false);
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      setLoading(true);
      let location = await Location.getCurrentPositionAsync({});
      setLoading(false);
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  return { location, errorMsg, loading, requestingPermission };
};
