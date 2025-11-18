import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
	runTransaction,
	serverTimestamp,
	Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { RideRequest, RideRequestPayload } from "@/types/ride.types";
import { useAuthStore } from "@/lib/store";

const OFFERS_COLLECTION = "offers";
const REQUESTS_SUBCOLLECTION = "requests";
const ONGOING_COLLECTION = "ongoingTrips";

export const RequestService = {
	async createRequest(offerId: string, userId: string) {
		try {
			const user = useAuthStore.getState().user;
			if (!user) {
				throw new Error("Not authenticated");
			}
			const payload: RideRequestPayload = { offerId, userId };

			const requestRef = await addDoc(
				collection(db, OFFERS_COLLECTION, payload.offerId, REQUESTS_SUBCOLLECTION),
				{
					offer_id: payload.offerId,
					user_id: payload.userId,
					status: "pending",
					createdAt: serverTimestamp(),
					userSnapshot: {
						id: user?.id,
						name: user?.name,
						email: user?.email,
						profilePicture: user?.profilePicture,
					},
				}
			);

			return {
				success: true,
				requestId: requestRef.id,
			};
		} catch (error) {
			console.error("Failed to create request", error);
			return {
				success: false,
				error: "Failed to create request",
			};
		}
	},

	async acceptRequest(requestId: string, offerId: string) {
		try {
			const onTransactionId = await runTransaction(db, async (transaction) => {
				const offerRef = doc(db, OFFERS_COLLECTION, offerId);
				const requestRef = doc(
					collection(offerRef, REQUESTS_SUBCOLLECTION),
					requestId
				);

				const offerSnapshot = await transaction.get(offerRef);
				const requestSnapshot = await transaction.get(requestRef);

				if (!offerSnapshot.exists()) {
					throw new Error("Offer not found");
				}

				if (!requestSnapshot.exists()) {
					throw new Error("Request not found");
				}

				const offerData = offerSnapshot.data();
				const requestData = requestSnapshot.data();

				const ongoingRef = doc(collection(db, ONGOING_COLLECTION));
				transaction.set(ongoingRef, {
					offer_id: offerId,
					request_id: requestId,
					driver_id: offerData.driver_id,
					passenger_id: requestData.user_id,
					destination_id:
						offerData.destination?.destination_id ??
						offerData.destination?.name ??
						null,
					driver_location: offerData.location,
					passenger_location: requestData.pickupLocation ?? null,
					createdAt: serverTimestamp(),
				});

				transaction.update(offerRef, {
					status: "accepted",
					updatedAt: serverTimestamp(),
				});

				transaction.update(requestRef, {
					status: "accepted",
					acceptedAt: serverTimestamp(),
				});

				return ongoingRef.id;
			});

			return {
				success: true,
				onTransactionId,
			};
		} catch (error) {
			console.error("Failed to accept request", error);
			return { success: false };
		}
	},

	async declineRequest(requestId: string, offerId: string) {
		try {
			await deleteDoc(
				doc(db, OFFERS_COLLECTION, offerId, REQUESTS_SUBCOLLECTION, requestId)
			);
			return true;
		} catch (error) {
			console.error("Failed to decline request", error);
			return false;
		}
	},

	async getRequestsByOfferId(offerId: string): Promise<RideRequest[]> {
		try {
			const q = query(
				collection(db, OFFERS_COLLECTION, offerId, REQUESTS_SUBCOLLECTION),
				orderBy("createdAt", "asc")
			);
			const snapshot = await getDocs(q);

			return snapshot.docs.map((docSnap) => {
				const data = docSnap.data();
				const snapshotUser = data.userSnapshot ?? {};
				return {
					request_id: docSnap.id,
					offer_id: data.offer_id,
					user_id: data.user_id,
					date: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : undefined,
					status: data.status,
					user: {
						id: snapshotUser.id,
						name: snapshotUser.name ?? "",
						email: snapshotUser.email ?? "",
						profilePicture: snapshotUser.profilePicture ?? "",
					},
				};
			});
		} catch (error) {
			console.error("Failed to get requests", error);
			return [];
		}
	},
};
