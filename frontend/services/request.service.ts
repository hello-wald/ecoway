import { RequestApi } from "@/api";
import { RideRequest, Ride } from "@/types/ride.types";
import { ApiClient } from "@/api/client";
import { AcceptRequestData } from "@/types/transaction.types";

export const RequestService = {
	async createRequest(offerId: string, userId: string) {
		try {
			const request: RideRequest = {
				offerId,
				userId,
			};
			const result = await RequestApi.createRequest(request);

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

	async acceptRequest(requestId: string, offerId: string) {
		try {
			const data: AcceptRequestData = {
				requestId,
				offerId,
			};
			const result = await RequestApi.acceptRequest(data);
			if (result && result.onTransactionId) {
				return {
					success: true,
					onTransactionId: result.onTransactionId,
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
			const result = await RequestApi.declineRequest(requestId);
			console.log('decline res', result);
			return result.success;
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
