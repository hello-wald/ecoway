import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { RequestService } from "@/services/request.service";
import { RideRequest } from "@/types/ride.types";

/**
 * Hook for polling ride requests for a given offer
 * @param offerId The ID of the offer to poll for requests
 * @param pollingInterval Time interval in milliseconds between polls (default: 5000ms)
 * @returns An object with ride requests and a flag indicating if there are new requests
 */
export function useRequestPolling(
	offerId: string | undefined,
	pollingInterval = 5000
) {
	const [rideRequests, setRideRequests] = useState<RideRequest[]>([]);
	const [hasNewRequest, setHasNewRequest] = useState(false);

	useFocusEffect(
		useCallback(() => {
			if (!offerId) return;

			let isActive = true;

			const poll = async () => {
				try {
					const requests = await RequestService.getRequestsByOfferId(
						offerId
					);

					if (isActive) {
						// Check if we have new requests that weren't in the previous state
						if (requests.length > rideRequests.length) {
							setHasNewRequest(true);
						}

						console.log('requests poll', requests);
						setRideRequests(requests);
					}
				} catch (err) {
					console.error("Polling error:", err);x
				}
			};

			poll();

			const interval = setInterval(poll, pollingInterval);

			return () => {
				isActive = false;
				clearInterval(interval);
			};
		}, [offerId, pollingInterval, rideRequests.length])
	);

	return {
		rideRequests,
		hasNewRequest,
		clearNewRequestFlag: () => setHasNewRequest(false),
	};
}
