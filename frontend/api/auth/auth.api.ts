import { apiClient } from '@/api/client';
import { UserCredentials, RegisterCredentials, User } from '@/types/user.types';
import { ENDPOINTS } from "@/api";

export interface AuthResponse {
	user: User;
	token: string;
	refreshToken?: string;
}

export interface RefreshTokenResponse {
	token: string;
	refreshToken?: string;
}

export const authApi = {
	/**
	 * Sign in with email and password
	 */
	signIn: async (credentials: UserCredentials): Promise<AuthResponse> => {
		const response = await apiClient.post<AuthResponse>(
			ENDPOINTS.AUTH.SIGN_IN,
			credentials
		);
		return response.data;
	},

	/**
	 * Sign up with name, email and password
	 */
	signUp: async (userData: RegisterCredentials): Promise<AuthResponse> => {
		const response = await apiClient.post<AuthResponse>(
			ENDPOINTS.AUTH.SIGN_UP,
			userData
		);
		return response.data;
	},

	/**
	 * Refresh authentication token
	 */
	refreshToken: async (refreshToken: string): Promise<RefreshTokenResponse> => {
		const response = await apiClient.post<RefreshTokenResponse>(
			ENDPOINTS.AUTH.REFRESH,
			{ refreshToken }
		);
		return response.data;
	},

	/**
	 * Get current user profile
	 */
	getCurrentUser: async (): Promise<User> => {
		const response = await apiClient.get<User>(ENDPOINTS.AUTH.ME);
		return response.data;
	},

	/**
	 * Logout user
	 */
	logout: async (): Promise<void> => {
		await apiClient.post(ENDPOINTS.AUTH.LOGOUT);
	},
};