import { Destination } from "@/types";
import { create } from "zustand";

interface DestinationStore {
	destination: Destination | null;
	setDestinations: (destinations: Destination) => void;
	deleteDestination: () => void;
}

export const useDestinationStore = create<DestinationStore>((set) => ({
	destination: {
		name: "",
		latitude: 0,
		longitude: 0,
	},
	setDestinations: (destination: Destination) => set({ destination }),
	deleteDestination: () => set({ destination: null}),
}));

