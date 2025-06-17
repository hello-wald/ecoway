export const ENDPOINTS = {
	// Auth endpoints
	AUTH: {
		REGISTER: '/users/register',
		LOGIN: '/users/login',
	},
	// Driver endpoints
	OFFER: {
		CREATE: 'carpool/create',
		LIST: 'carpool/offers',
		CANCEL: (offerId: string) => `carpool/cancel/${offerId}`,
		DETAIL: (offerId: string) => `carpooling/offer/${offerId}`,
	},
	// Rider endpoints
	REQUEST: {
		CREATE: 'carpool/request',
		ACCEPT: 'carpool/accept',
	}
	// RIDES: {
	//   LIST: `${API_BASE_URL}/home`,
	//   CREATE: `${API_BASE_URL}/home`,
	// }
} as const;