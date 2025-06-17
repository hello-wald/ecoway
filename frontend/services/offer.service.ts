import { RideOfferRequest } from "@/types/ride.types";
import { OfferApi } from "@/api";

export const OfferService = {

	async createOffer(offer: RideOfferRequest) {
		const result = await OfferApi.createOffer(offer);

		if (result.success && result.data) {
			return result.data;
		} else {
			throw new Error(result.message || "Failed to create offer");
		}
	},

	async getOffers() {
		const result = await OfferApi.getOffers();
		return result || [];
	},

	async getRides() {

	}
}