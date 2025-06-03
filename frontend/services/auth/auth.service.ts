import { AuthApi } from "@/api";
import { AuthData, LoginCredentials, RegisterCredentials } from "@/types";
import { useAuthStore } from "@/lib/store";
import { handleApiError } from "@/lib/utils";
import { ApiResponse } from "@/types/api.types";
import * as SecureStore from "expo-secure-store";
import { AUTH_TOKEN_KEY } from "@/lib/constants";
import { router } from "expo-router";

const { setUser } = useAuthStore.getState();

export const AuthService = {

	/**
	 * Register a new user with name, email, and password.
	 * @param credentials - Name, email, and password for registration.
	 * @returns A promise that resolves to an object indicating success or failure.
	 */
	async register(credentials: RegisterCredentials) {
		try {

			console.log("testt")
			const result: ApiResponse<AuthData> = await AuthApi.register(credentials);
			console.log('res in service', result);
			if (result?.success && result.data?.user) {
				console.log('serv res',result)
				setUser(result.data.user);
				await SecureStore.setItemAsync(AUTH_TOKEN_KEY, result.data.token ?? '');
			} else {
				return {
					errors: result.data?.errors,
				}
			}
		} catch (error) {
			handleApiError(error);
		}
	},

	/**
	 * Log in an existing user with email and password.
	 * @param credentials - Email and password for login.
	 * @returns A promise that resolves to an object indicating success or failure.
	 */
	async login(credentials: LoginCredentials) {
		try {
			const result: ApiResponse<AuthData> = await AuthApi.login(credentials);

			if (result?.success && result.data?.user) {
				setUser(result.data.user);
				await SecureStore.setItemAsync(AUTH_TOKEN_KEY, result.data.token ?? '');
				router.replace('/(tabs)');
			} else {
				return {
					errors: result.data?.errors,
				};
			}
		} catch (error) {
			handleApiError(error);
		}
	}
};
