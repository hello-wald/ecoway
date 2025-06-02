import { AuthApi } from "@/api";
import { LoginCredentials, RegisterCredentials } from "@/types";
import { useAuthStore } from "@/lib/store";
import { handleApiError } from "@/lib/utils";

export class AuthService {
	static async register(RegisterCredentials: RegisterCredentials) {
		try {
			const data = await AuthApi.register(RegisterCredentials);
			if (data?.success) {
				// Set user in auth store (simulate user object)
				useAuthStore.getState().setUser({
					name: RegisterCredentials.name,
					email: RegisterCredentials.email,
				});
				return { success: true, message: data.message };
			} else {
				return {
					success: false,
					message: data?.message || "Registration failed",
				};
			}
		} catch (error) {
			const err = handleApiError(error);
			return { success: false, message: err.message };
		}
	}

	static async login(credentials: LoginCredentials) {
		return AuthApi.login(credentials);
	}
}
