import {
	addDoc,
	collection,
	doc,
	getDocs,
	query,
	serverTimestamp,
	updateDoc,
	where,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { RideOffer, RideOfferRequest } from "@/types/ride.types";
import { useAuthStore } from "@/lib/store";

const OFFER_COLLECTION = "offers";

export const OfferService = {
	async createOffer(offer: RideOfferRequest) {
		const currentUser = useAuthStore.getState().user;
		const driverId = currentUser?.id ?? auth.currentUser?.uid;

		if (!driverId) {
			throw new Error("You need to be signed in to create an offer");
		}

		const offerRef = await addDoc(collection(db, OFFER_COLLECTION), {
			driver_id: driverId,
			driver_name: currentUser?.name ?? "",
			destination: offer.destination,
			location: offer.location,
			status: "open",
			createdAt: serverTimestamp(),
			updatedAt: serverTimestamp(),
		});

		return offerRef.id;
	},

	async getOffers(): Promise<RideOffer[]> {
		const q = query(
			collection(db, OFFER_COLLECTION),
			where("status", "==", "open")
		);
		const snapshot = await getDocs(q);

		return snapshot.docs.map((docSnap) => {
			const data = docSnap.data();
			const destination = data.destination ?? {};

			return {
				offer_id: docSnap.id,
				driver_id: data.driver_id,
				driver_name: data.driver_name ?? "",
				destination: {
					name:
						destination.name ?? destination.destination_name ?? "",
					destination_name:
						destination.destination_name ?? destination.name ?? "",
					latitude: destination.latitude ?? 0,
					longitude: destination.longitude ?? 0,
				},
				location: {
					latitude: data.location?.latitude ?? 0,
					longitude: data.location?.longitude ?? 0,
				},
				status: data.status,
			} as RideOffer;
		});
	},

	async cancelOffer(offerId: string) {
		try {
			await updateDoc(doc(db, OFFER_COLLECTION, offerId), {
				status: "cancelled",
				updatedAt: serverTimestamp(),
			});
			return true;
		} catch (error) {
			console.error("Failed to cancel offer", error);
			return false;
		}
	},

	async finishOffer(offerId: string) {
		try {
			await updateDoc(doc(db, OFFER_COLLECTION, offerId), {
				status: "completed",
				updatedAt: serverTimestamp(),
			});
			return true;
		} catch (error) {
			console.error("Failed to finish offer", error);
			return false;
		}
	},
};
