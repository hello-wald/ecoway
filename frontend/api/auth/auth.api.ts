import { apiClient } from '@/api/client';
import { UserCredentials, RegisterCredentials, User } from '@/types/user.types';

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
			'/auth/signin',
			credentials
		);
		return response.data;
	},

	/**
	 * Sign up with name, email and password
	 */
	signUp: async (userData: RegisterCredentials): Promise<AuthResponse> => {
		const response = await apiClient.post<AuthResponse>(
			'/auth/signup',
			userData
		);
		return response.data;
	},

	/**
	 * Refresh authentication token
	 */
	refreshToken: async (refreshToken: string): Promise<RefreshTokenResponse> => {
		const response = await apiClient.post<RefreshTokenResponse>(
			'/auth/refresh',
			{ refreshToken }
		);
		return response.data;
	},

	/**
	 * Get current user profile
	 */
	getCurrentUser: async (): Promise<User> => {
		const response = await apiClient.get<User>('/auth/me');
		return response.data;
	},

	/**
	 * Logout user
	 */
	logout: async (): Promise<void> => {
		await apiClient.post('/auth/logout');
	},
};