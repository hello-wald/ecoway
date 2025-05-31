import { useState, useEffect } from "react";
import { router } from "expo-router";
import { AuthService } from "@/services/auth/auth.service";
import { UserCredentials, RegisterCredentials, User } from "@/types/user.types";
import { useAuthStore } from "@/lib/store/auth-store";
import { getErrorMessage } from "@/lib/utils/error-handler";

export const useAuth = () => {
	const {
		user,
		isAuthenticated,
		isLoading,
		setUser,
		setLoading,
		logout: logoutStore,
	} = useAuthStore();

	const [error, setError] = useState<string | null>(null);

	// Initialize auth state on app start
	useEffect(() => {
		initializeAuth();
	}, []);

	const initializeAuth = async () => {
		try {
			setLoading(true);
			const isAuth = await AuthService.isAuthenticated();

			if (isAuth) {
				const currentUser = await AuthService.getCurrentUser();
				if (currentUser) {
					setUser(currentUser);
				} else {
					// If no user data but token exists, try to refresh
					try {
						const refreshedUser =
							await AuthService.refreshCurrentUser();
						setUser(refreshedUser);
					} catch {
						// If refresh fails, clear everything
						await AuthService.logout();
						logoutStore();
					}
				}
			}
		} catch (error) {
			console.error("Auth initialization error:", error);
			// Clear any corrupted auth state
			await AuthService.logout();
			logoutStore();
		} finally {
			setLoading(false);
		}
	};

	const signIn = async (credentials: UserCredentials) => {
		try {
			setLoading(true);
			setError(null);

			const user = await AuthService.signIn(credentials);
			setUser(user);

			// Navigate to main app
			router.replace("/(tabs)");
		} catch (error) {
			const errorMessage = getErrorMessage(error);
			setError(errorMessage);
			throw error; // Re-throw so UI can handle it if needed
		} finally {
			setLoading(false);
		}
	};

	const signUp = async (userData: RegisterCredentials) => {
		try {
			setLoading(true);
			setError(null);

			const user = await AuthService.signUp(userData);
			setUser(user);

			// Navigate to main app
			router.replace("/(tabs)");
		} catch (error) {
			const errorMessage = getErrorMessage(error);
			setError(errorMessage);
			throw error; // Re-throw so UI can handle it if needed
		} finally {
			setLoading(false);
		}
	};

	const logout = async () => {
		try {
			setLoading(true);
			setError(null);

			await AuthService.logout();
			logoutStore();

			// Navigate to auth screen
			router.replace("/(auth)");
		} catch (error) {
			const errorMessage = getErrorMessage(error);
			setError(errorMessage);
			// Even if logout API fails, clear local state
			logoutStore();
			router.replace("/(auth)");
		} finally {
			setLoading(false);
		}
	};

	const refreshUser = async () => {
		try {
			setError(null);
			const refreshedUser = await AuthService.refreshCurrentUser();
			setUser(refreshedUser);
			return refreshedUser;
		} catch (error) {
			const errorMessage = getErrorMessage(error);
			setError(errorMessage);
			throw error;
		}
	};

	const clearError = () => {
		setError(null);
	};

	return {
		// State
		user,
		isAuthenticated,
		isLoading,
		error,

		// Actions
		signIn,
		signUp,
		logout,
		refreshUser,
		clearError,
		initializeAuth,
	};
};
