import {
	collection,
	doc,
	getDocs,
	query,
	runTransaction,
	serverTimestamp,
	where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { OngoingTransaction } from "@/types/transaction.types";

const ONGOING_COLLECTION = "ongoingTrips";
const HISTORY_COLLECTION = "tripHistory";

export const TransactionService = {
	async getRequestsByPassengerId(passengerId: string) {
		try {
			const q = query(
				collection(db, ONGOING_COLLECTION),
				where("passenger_id", "==", passengerId)
			);
			const snapshot = await getDocs(q);

			return snapshot.docs.map((docSnap) => {
				const data = docSnap.data();
				const createdAt =
					typeof data.createdAt?.toDate === "function"
						? data.createdAt.toDate()
						: undefined;
				return {
					on_transaction_id: docSnap.id,
					driver_id: data.driver_id,
					passenger_id: data.passenger_id,
					destination_id: data.destination_id,
					driver_location: data.driver_location,
					passenger_location: data.passenger_location,
					offer_id: data.offer_id,
					request_id: data.request_id,
					createdAt,
				} as OngoingTransaction;
			});
		} catch (error) {
			console.error("Failed to fetch passenger transactions", error);
			return [];
		}
	},

	async endTransaction(transactionId: string) {
		try {
			await runTransaction(db, async (tx) => {
				const ongoingRef = doc(db, ONGOING_COLLECTION, transactionId);
				const ongoingSnap = await tx.get(ongoingRef);

				if (!ongoingSnap.exists()) {
					throw new Error("Transaction not found");
				}

				const ongoingData = ongoingSnap.data();

				tx.set(doc(collection(db, HISTORY_COLLECTION)), {
					...ongoingData,
					trip_id: ongoingData.trip_id ?? transactionId,
					trip_date: serverTimestamp(),
				});

				tx.delete(ongoingRef);

				if (ongoingData.offer_id) {
					tx.update(doc(db, "offers", ongoingData.offer_id), {
						status: "completed",
						updatedAt: serverTimestamp(),
					});
				}
			});

			return true;
		} catch (error) {
			console.error("Error ending transaction", error);
			return false;
		}
	},
};
