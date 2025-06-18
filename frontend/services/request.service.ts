import { RequestApi } from "@/api";
import { RideRequest, Ride } from "@/types/ride.types";
import { ApiClient } from "@/api/client";

export const RequestService = {
	async createRequest(offerId: string, userId: string) {
		try {
			const request: RideRequest = {
				offerId,
				userId,
			};
			const result = await RequestApi.createRequest(request);

			console.log("create req res", result);
			if (result.requestId) {
				return {
					success: true,
					requestId: result.requestId,
				};
			} else {
				throw new Error(
					`Error creating request: ${
						result.message || "unknown error"
					}`
				);
			}
		} catch (error) {
			console.error("Failed to create request:", error);
			throw new Error("Failed to create request");
		}
	},

	async acceptRequest(ride: Ride) {
		try {
			const result = await RequestApi.acceptRequest(ride);
			if (result && result.data) {
				// The server returns an onTransactionId for the accepted ride
				return {
					success: true,
					onTransactionId:
						typeof result.data === "string"
							? result.data
							: result.data.onTransactionId || "",
				};
			}
			return { success: false };
		} catch (error) {
			console.error("Error accepting request:", error);
			throw new Error("Failed to accept request");
		}
	},

	async declineRequest(requestId: string) {
		try {
			const response = await ApiClient.delete(
				`/carpool/decline/${requestId}`
			);
			return response.data.success || false;
		} catch (error) {
			console.error("Error declining request:", error);
			return false;
		}
	},

	async getRequestsByOfferId(offerId: string) {
		try {
			const result = await RequestApi.getRequestsByOfferId(offerId);
			return result.data || [];
		} catch (error) {
			console.error("Error getting requests:", error);
			return [];
		}
	},
};
