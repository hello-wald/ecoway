import { ApiClient } from "../client";
import { ENDPOINTS } from "../endpoints";
import { AuthData, LoginCredentials, RegisterCredentials } from "@/types";
import { ApiResponse } from "@/types/api.types";

export const AuthApi = {
	/**
	 * Register with name, email and password.
	 */
	register: async (payload: RegisterCredentials) => {
		console.log('testt')
		console.log('ep',ENDPOINTS.AUTH.REGISTER)
		console.log('pay',payload)

		const res = await ApiClient.post(
			ENDPOINTS.AUTH.REGISTER,
			payload
		);
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
