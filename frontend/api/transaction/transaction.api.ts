import { ApiResponse } from "@/types";
import { OngoingTransaction } from "@/types/transaction.types";
import { handleApiCall } from "@/lib/utils";
import { ApiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const TransactionApi = {
	getRequestsByPassengerId: async (
		passengerId: string
	): Promise<ApiResponse<OngoingTransaction[]>> => {
		return handleApiCall<OngoingTransaction[]>(() =>
			ApiClient.get<ApiResponse<OngoingTransaction[]>>(
				ENDPOINTS.REQUEST.GET_BY_PASSENGER(passengerId)
			)
		);
	},

	endTransaction: async (
		transactionId: string
	): Promise<ApiResponse<{ success: boolean }>> => {
		return handleApiCall<{ success: boolean }>(() =>
			ApiClient.delete<ApiResponse<{ success: boolean }>>(
				ENDPOINTS.OFFER.FINISH(transactionId)
			)
		);
	},
}