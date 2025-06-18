import { TransactionApi } from "@/api";

export const TransactionService = {
	async getRequestsByPassengerId(passengerId: string) {
		try {
			const result = await TransactionApi.getRequestsByPassengerId(passengerId);
			if (result) {
				return result;
			}
		} catch (error) {
			console.error("Error getting requests by passenger ID:", error);
			return [];
		}
	},

	async endTransaction(transactionId: string) {
		try {
			const result = await TransactionApi.endTransaction(transactionId);

			console.log('end tr', result);
			if (result && result.success) {
				return result.success;
			} else {
				throw new Error("Failed to end transaction");
			}
		} catch (error) {
			console.error("Error ending transaction:", error);
			return { success: false, message: error.message || "Unknown error" };
		}
	}
}