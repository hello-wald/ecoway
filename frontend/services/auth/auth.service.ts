import { AuthApi } from "@/api";
import { AuthData, LoginCredentials, RegisterCredentials } from "@/types";
import { useAuthStore } from "@/lib/store";
import { ApiResponse } from "@/types/api.types";
import * as SecureStore from "expo-secure-store";
import { AUTH_TOKEN_KEY } from "@/lib/constants";

export const AuthService = {

	async register(credentials: RegisterCredentials) {
		const result: ApiResponse<AuthData> = await AuthApi.register(credentials);
		if (result?.success && result.data?.user) {

			const userData = result.data.user;

			useAuthStore.getState().setUser(result.data.user);
			await SecureStore.setItemAsync(AUTH_TOKEN_KEY, result.data.token ?? '');
			return;
		}
		return {
			errors: result.data?.errors,
		};
	},

	async login(credentials: LoginCredentials) {
		const result: ApiResponse<AuthData> = await AuthApi.login(credentials);
		if (result?.success && result.data?.user) {
			useAuthStore.getState().setUser(result.data.user);
			await SecureStore.setItemAsync(AUTH_TOKEN_KEY, result.data.token ?? '');
			return;
		}
		return {
			errors: result.data?.errors,
		};
	}
};
