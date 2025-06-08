import { User } from "@/types/user.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_DATA_KEY } from "@/lib/constants";

interface AuthStore {
	user: User | null;
	isAuthenticated: boolean;
	setUser: (user: User) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
	persist(
		(set) => ({
			user: null,
			isAuthenticated: false,
			setUser: (user: User) => set({ user, isAuthenticated: !!user }),
			logout: () => set({ user: null, isAuthenticated: false }),
		}),
		{
			name: USER_DATA_KEY,
			storage: createJSONStorage(() => AsyncStorage), // or SecureStore
			partialize: (state) => ({
				user: state.user,
				isAuthenticated: state.isAuthenticated
			}),
		}
	)
);