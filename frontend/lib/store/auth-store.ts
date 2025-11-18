import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth";
import { User } from "@/types/user.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { USER_DATA_KEY } from "@/lib/constants";
import { auth } from "@/lib/firebase";

interface AuthStore {
	user: User | null;
	isAuthenticated: boolean;
	isAuthReady: boolean;
	setUser: (user: User | null) => void;
	setAuthReady: (ready: boolean) => void;
	logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
	persist(
		(set) => ({
			user: null,
			isAuthenticated: false,
			isAuthReady: false,
			setUser: (user: User | null) =>
				set({ user, isAuthenticated: !!user }),
			setAuthReady: (ready: boolean) => set({ isAuthReady: ready }),
			logout: async () => {
				try {
					await signOut(auth);
				} catch (error) {
					console.error("Failed to sign out", error);
				} finally {
					set({ user: null, isAuthenticated: false });
				}
			},
		}),
		{
			name: USER_DATA_KEY,
			storage: createJSONStorage(() => AsyncStorage),
			partialize: (state) => ({
				user: state.user,
				isAuthenticated: state.isAuthenticated,
			}),
		}
	)
);
