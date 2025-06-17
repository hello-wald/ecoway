import { RideOfferRequest } from "@/types/ride.types";
import { OfferApi } from "@/api";

export const OfferService = {

	async createOffer(offer: RideOfferRequest) {
		const result = await OfferApi.createOffer(offer);

		if (result.offer_id) {
			return result.offer_id;
		} else {
			throw new Error("Failed to create offer");
		}
	},

	async getOffers() {
		const result = await OfferApi.getOffers();
		return result || [];
	},

	async cancelOffer(offerId: string) {
		console.log('cancel id', offerId);
		const result = await OfferApi.cancelOffer(offerId);

		if (result.success) {
			return true;
		} else {
			throw new Error(result.message || "Failed to cancel offer");
		}
	},

	async getRides() {

	}
}