export const ENDPOINTS = {
	// Auth endpoints
	AUTH: {
		REGISTER: "/users/register",
		LOGIN: "/users/login",
	},
	// Driver endpoints
	OFFER: {
		CREATE: "carpool/create",
		LIST: "carpool/offers",
		CANCEL: (offerId: string) => `carpool/cancel/${offerId}`,
		DETAIL: (offerId: string) => `carpooling/offer/${offerId}`,
		FINISH: (transactionId: string) => `carpool/end/${transactionId }`,
	},
	// Rider endpoints
	REQUEST: {
		CREATE: "carpool/request",
		ACCEPT: "carpool/accept",
		DECLINE: (requestId: string) => `carpool/decline/${requestId}`,
		GET_BY_OFFER: (offerId: string) => `carpool/request/${offerId}`,
		GET_BY_PASSENGER: (passengerId: string) => `carpool/ongoing/transactions/passenger/${passengerId}`,
	},
	TRANSACTION: {
		GET_BY_DRIVER: (driverId: string) => `carpool/history/d/${driverId}`,
		GET_BY_PASSENGER: (passengerId: string) => `carpool/history/c/${passengerId}`,
	},
	// RIDES: {
	//   LIST: `${API_BASE_URL}/home`,
	//   CREATE: `${API_BASE_URL}/home`,
	// }
} as const;
