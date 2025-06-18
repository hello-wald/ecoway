import { useState } from "react";
import { TransactionService } from "@/services/transaction.service";

export function useTransactionPolling(userId: string) {
	const [polling, setPolling] = useState(false);
	const [pollError, setPollError] = useState(false);
	const [pollTimeout, setPollTimeout] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [requestAccepted, setRequestAccepted] = useState(false);

	const pollForTransaction = async (maxAttempts = 10, interval = 3000) => {
		let attempts = 0;
		setPolling(true);
		setPollError(false);
		setPollTimeout(false);
		setErrorMessage("");
		setRequestAccepted(false); // reset

		const intervalId = setInterval(async () => {
			try {
				attempts++;
				const transactions = await TransactionService.getRequestsByPassengerId(userId);

				if (!Array.isArray(transactions)) {
					throw new Error("Invalid transaction data");
				}

				const active = transactions.find(t => t.passenger_id === userId);
				if (active) {
					clearInterval(intervalId);
					setPolling(false);
					setRequestAccepted(true);
					return;
				}

				if (attempts >= maxAttempts) {
					clearInterval(intervalId);
					setPolling(false);
					setPollTimeout(true);
					setErrorMessage("Your ride request timed out. Please try again.");
				}
			} catch (err: any) {
				clearInterval(intervalId);
				setPolling(false);
				setPollError(true);
				setErrorMessage(err.message || "Unknown polling error");
			}
		}, interval);
	};

	return {
		polling,
		pollError,
		pollTimeout,
		errorMessage,
		pollForTransaction,
		requestAccepted,
	};
}
