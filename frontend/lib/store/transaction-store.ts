import { create } from "zustand";

interface TransactionStore	{
	transactionId: string | null;
	setTransactionId: (id: string) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
	transactionId: null,
	setTransactionId: (id: string) => set({ transactionId: id }),
}));