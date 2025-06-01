
export const ENDPOINTS = {
	// Auth endpoints
	AUTH: {
		SIGN_IN: `/users/login`,
		SIGN_UP: `/users/register`,
		REFRESH: `/auth/refresh`,
		LOGOUT: `/auth/logout`,
		ME: `/auth/me`,
	},
	// Future endpoints can be added here
	// RIDES: {
	//   LIST: `${API_BASE_URL}/rides`,
	//   CREATE: `${API_BASE_URL}/rides`,
	// }
} as const;