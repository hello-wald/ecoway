import { User } from "@/types/user.types";

export interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	loading: boolean;
}

export interface AuthResponse {
	success: string;
	message: string;
	token?: string;
}
