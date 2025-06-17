import { ApiResponse } from "@/types";
import { Ride, RideRequest } from "@/types/ride.types";
import { handleApiCall } from "@/lib/utils";
import { ApiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const RequestApi = {

	createRequest: async (request: RideRequest): Promise<ApiResponse<string>> => {
		return handleApiCall<string>(() =>
			ApiClient.post<ApiResponse<string>>(
				ENDPOINTS.REQUEST.CREATE,
				request
			)
		);
	},

	acceptRequest: async (ride: Ride): Promise<ApiResponse<string>> => {
		return handleApiCall<string>(() =>
			ApiClient.post<ApiResponse<string>>(
				ENDPOINTS.REQUEST.ACCEPT,
				ride
			)
		);
	}

}