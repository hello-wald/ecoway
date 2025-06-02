import { User } from "@/types/user.types";
import { create } from "zustand";

interface AuthStore {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	setUser: (user: User) => void;
	setLoading: (loading: boolean) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	isAuthenticated: false,
	isLoading: false,
	setUser: (user: User | null) => set({ user, isAuthenticated: true }),
	setLoading: (isLoading) => set({ isLoading }),
	logout: () => set({ user: null, isAuthenticated: false }),
}));