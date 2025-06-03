import { ApiClient } from "../client";
import { ENDPOINTS } from "../endpoints";
import { AuthData, LoginCredentials, RegisterCredentials } from "@/types";
import { ApiResponse } from "@/types/api.types";

export const AuthApi = {
	/**
	 * Register with name, email and password.
	 */
	register: async (payload: RegisterCredentials) => {


		console.log("register api", payload);
		const res = await ApiClient.post<ApiResponse<AuthData>>(
			ENDPOINTS.AUTH.REGISTER,
			payload
		).catch((err) => {
			console.error('Error in AuthApi.register:', err);
			throw err; // Re-throw the error to be handled by the caller
		})

		console.log('api', res);
		return res.data;
	},

	/**
	 * Log in with email and password.
	 */
	login: async (payload: LoginCredentials) => {
		const res = await ApiClient.post<ApiResponse<AuthData>>(
			ENDPOINTS.AUTH.LOGIN,
			payload
		);
		return res.data;
	},
};
