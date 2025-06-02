import { ApiClient } from "../client";
import { ENDPOINTS } from "../endpoints";
import { AuthResponse, LoginCredentials, RegisterCredentials } from "@/types";

export const AuthApi = {
	/**
	 * Register with name, email and password.
	 */
	register: async (payload: RegisterCredentials) => {
		const res = await ApiClient.post<AuthResponse>(
			ENDPOINTS.AUTH.REGISTER,
			payload
		);
		return res.data;
	},

	/**
	 * Log in with email and password.
	 */
	login: async (payload: LoginCredentials) => {
		const res = await ApiClient.post<AuthResponse>(
			ENDPOINTS.AUTH.LOGIN,
			payload
		);
		return res.data;
	},
};
