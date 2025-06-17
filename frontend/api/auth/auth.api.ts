import { ApiClient } from "../client";
import { ENDPOINTS } from "../endpoints";
import { AuthData, LoginCredentials, RegisterCredentials } from "@/types";
import { ApiResponse } from "@/types/api.types";
import { handleApiCall } from "@/lib/utils";

export const AuthApi = {

	register: async (credentials: RegisterCredentials): Promise<ApiResponse<AuthData>> => {
		return handleApiCall<AuthData>(() =>
			ApiClient.post<ApiResponse<AuthData>>(
				ENDPOINTS.AUTH.REGISTER,
				credentials
			)
		);
	},

	login: async (credentials: LoginCredentials) => {
		return handleApiCall<AuthData>(() =>
			ApiClient.post<ApiResponse<AuthData>>(
				ENDPOINTS.AUTH.LOGIN,
				credentials
			)
		);
	},
};
