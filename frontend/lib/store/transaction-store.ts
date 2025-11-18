import { create } from "zustand";

interface TransactionStore {
	transactionId: string | null;
	setTransactionId: (id: string | null) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
	transactionId: null,
	setTransactionId: (id) => set({ transactionId: id }),
}));
