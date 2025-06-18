import { ApiResponse } from "@/types";
import { Ride, RideRequest } from "@/types/ride.types";
import { handleApiCall } from "@/lib/utils";
import { ApiClient } from "../client";
import { ENDPOINTS } from "../endpoints";
import { AcceptRequestData, OngoingTransaction } from "@/types/transaction.types";

export const RequestApi = {
	createRequest: async (
		request: RideRequest
	): Promise<ApiResponse<string>> => {
		return handleApiCall<string>(() =>
			ApiClient.post<ApiResponse<string>>(
				ENDPOINTS.REQUEST.CREATE,
				request
			)
		);
	},

	acceptRequest: async (ride: AcceptRequestData): Promise<ApiResponse<string>> => {
		return handleApiCall<string>(() =>
			ApiClient.post<ApiResponse<string>>(ENDPOINTS.REQUEST.ACCEPT, ride)
		);
	},

	declineRequest: async (requestId: string): Promise<ApiResponse<string>> => {
		return handleApiCall<string>(() =>
			ApiClient.delete<ApiResponse<string>>(
				ENDPOINTS.REQUEST.DECLINE(requestId)
			)
		);
	},

	getRequestsByOfferId: async (
		offerId: string
	): Promise<ApiResponse<RideRequest[]>> => {
		return handleApiCall<RideRequest[]>(() =>
			ApiClient.get<ApiResponse<RideRequest[]>>(
				ENDPOINTS.REQUEST.GET_BY_OFFER(offerId)
			)
		);
	},
};
