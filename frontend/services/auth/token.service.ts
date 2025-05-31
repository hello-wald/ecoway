import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	AUTH_TOKEN_KEY,
	REFRESH_TOKEN_KEY,
	USER_DATA_KEY,
} from "@/lib/constants/storage-keys";
import { User } from "@/types/user.types";

export class TokenService {
	/**
	 * Store authentication tokens
	 */
	static async setTokens(
		token: string,
		refreshToken?: string
	): Promise<void> {
		try {
			await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
			if (refreshToken) {
				await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
			}
		} catch (error) {
			console.error("Error storing tokens:", error);
			throw new Error("Failed to store authentication tokens");
		}
	}

	/**
	 * Get authentication token
	 */
	static async getToken(): Promise<string | null> {
		try {
			return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
		} catch (error) {
			console.error("Error getting token:", error);
			return null;
		}
	}

	/**
	 * Get refresh token
	 */
	static async getRefreshToken(): Promise<string | null> {
		try {
			return await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
		} catch (error) {
			console.error("Error getting refresh token:", error);
			return null;
		}
	}

	/**
	 * Store user data
	 */
	static async setUserData(user: User): Promise<void> {
		try {
			await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
		} catch (error) {
			console.error("Error storing user data:", error);
			throw new Error("Failed to store user data");
		}
	}

	/**
	 * Get user data
	 */
	static async getUserData(): Promise<User | null> {
		try {
			const userData = await AsyncStorage.getItem(USER_DATA_KEY);
			return userData ? JSON.parse(userData) : null;
		} catch (error) {
			console.error("Error getting user data:", error);
			return null;
		}
	}

	/**
	 * Clear all authentication data
	 */
	static async clearAll(): Promise<void> {
		try {
			await AsyncStorage.multiRemove([
				AUTH_TOKEN_KEY,
				REFRESH_TOKEN_KEY,
				USER_DATA_KEY,
			]);
		} catch (error) {
			console.error("Error clearing tokens:", error);
			throw new Error("Failed to clear authentication data");
		}
	}

	/**
	 * Check if user is authenticated
	 */
	static async isAuthenticated(): Promise<boolean> {
		const token = await this.getToken();
		return !!token;
	}
}
