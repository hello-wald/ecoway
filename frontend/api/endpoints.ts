// API endpoint constants
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const ENDPOINTS = {
	// Auth endpoints
	AUTH: {
		SIGN_IN: `${API_BASE_URL}/auth/signin`,
		SIGN_UP: `${API_BASE_URL}/auth/signup`,
		REFRESH: `${API_BASE_URL}/auth/refresh`,
		LOGOUT: `${API_BASE_URL}/auth/logout`,
		ME: `${API_BASE_URL}/auth/me`,
	},
	// Future endpoints can be added here
	// RIDES: {
	//   LIST: `${API_BASE_URL}/rides`,
	//   CREATE: `${API_BASE_URL}/rides`,
	// }
} as const;