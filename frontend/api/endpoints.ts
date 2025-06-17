const baseURL = 'http://localhost:3000'
export const ENDPOINTS = {
	// Auth endpoints
	AUTH: {
		REGISTER: '/users/register',
		LOGIN: 'http://localhost:3000/users/login',
	},
	// Future endpoints can be added here
	// RIDES: {
	//   LIST: `${API_BASE_URL}/home`,
	//   CREATE: `${API_BASE_URL}/home`,
	// }
} as const;