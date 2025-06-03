import * as Location from "expo-location";
import { useEffect, useState } from "react";

export const useLocation = () => {
	const [coords, setCoords] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const { status } =
					await Location.requestForegroundPermissionsAsync();
				if (status !== "granted") {
					setError("Permission to access location was denied");
					return;
				}
				const location = await Location.getCurrentPositionAsync({});
				setCoords({
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
				});
			} catch (e: any) {
				setError(e.message || "Failed to get location");
			}
		})();
	}, []);

	return { coords, error };
};
