import { authApi, AuthResponse } from "@/api/auth/auth.api";
import { UserCredentials, RegisterCredentials, User } from "@/types";
import { TokenService } from "@/services";
import { AuthError } from "@/lib/utils/error-handler";

export class AuthService {
	/**
	 * Sign in user with email and password
	 */
	static async signIn(credentials: UserCredentials): Promise<User> {
		try {
			const response: AuthResponse = await authApi.signIn(credentials);

			// Store tokens and user data
			await TokenService.setTokens(response.token, response.refreshToken);
			await TokenService.setUserData(response.user);

			return response.user;
		} catch (error) {
			console.error("Sign in error:", error);
			throw error instanceof AuthError
				? error
				: new AuthError("Sign in failed. Please try again.");
		}
	}

	/**
	 * Sign up user with name, email and password
	 */
	static async signUp(userData: RegisterCredentials): Promise<User> {
		try {
			const response: AuthResponse = await authApi.signUp(userData);

			// Store tokens and user data
			await TokenService.setTokens(response.token, response.refreshToken);
			await TokenService.setUserData(response.user);

			return response.user;
		} catch (error) {
			console.error("Sign up error:", error);
			throw error instanceof AuthError
				? error
				: new AuthError("Sign up failed. Please try again.");
		}
	}

	/**
	 * Logout user
	 */
	static async logout(): Promise<void> {
		try {
			// Call logout API if we have a token
			const token = await TokenService.getToken();
			if (token) {
				try {
					await authApi.logout();
				} catch (error) {
					// Don't throw error if logout API fails, still clear local data
					console.warn("Logout API call failed:", error);
				}
			}

			// Clear all stored data
			await TokenService.clearAll();
		} catch (error) {
			console.error("Logout error:", error);
			// Even if there's an error, try to clear local data
			await TokenService.clearAll();
			throw new AuthError("Logout failed. Please try again.");
		}
	}

	/**
	 * Get current user from storage
	 */
	static async getCurrentUser(): Promise<User | null> {
		try {
			return await TokenService.getUserData();
		} catch (error) {
			console.error("Get current user error:", error);
			return null;
		}
	}

	/**
	 * Refresh user data from API
	 */
	static async refreshCurrentUser(): Promise<User> {
		try {
			const user = await authApi.getCurrentUser();
			await TokenService.setUserData(user);
			return user;
		} catch (error) {
			console.error("Refresh user error:", error);
			throw error instanceof AuthError
				? error
				: new AuthError("Failed to refresh user data.");
		}
	}

	/**
	 * Check if user is authenticated
	 */
	static async isAuthenticated(): Promise<boolean> {
		return await TokenService.isAuthenticated();
	}

	/**
	 * Refresh authentication token
	 */
	static async refreshToken(): Promise<void> {
		try {
			const refreshToken = await TokenService.getRefreshToken();
			if (!refreshToken) {
				throw new AuthError("No refresh token available");
			}

			const response = await authApi.refreshToken(refreshToken);
			await TokenService.setTokens(response.token, response.refreshToken);
		} catch (error) {
			console.error("Token refresh error:", error);
			// If refresh fails, clear all tokens
			await TokenService.clearAll();
			throw error instanceof AuthError
				? error
				: new AuthError("Session expired. Please sign in again.");
		}
	}
}
