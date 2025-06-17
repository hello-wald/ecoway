import { ApiResponse } from "@/types";
import { RideOffer, RideOfferRequest } from "@/types/ride.types";
import { handleApiCall } from "@/lib/utils";
import { ApiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const OfferApi = {

	createOffer: async (offer: RideOfferRequest): Promise<ApiResponse<RideOffer>> => {
		return handleApiCall<RideOffer>(() =>
			ApiClient.post<ApiResponse<RideOffer>>(
				ENDPOINTS.OFFER.CREATE,
				offer
			)
		);
	},

	getOffers: async (): Promise<ApiResponse<RideOffer[]>> => {
		return handleApiCall<RideOffer[]>(() =>
			ApiClient.get<ApiResponse<RideOffer[]>>(
				ENDPOINTS.OFFER.LIST
			)
		);
	},

	cancelOffer: async (offerId: string): Promise<ApiResponse<boolean>> => {
		return handleApiCall<boolean>(() =>
			ApiClient.delete<ApiResponse<boolean>>(
				ENDPOINTS.OFFER.CANCEL(offerId)
			)
		);
	}

}