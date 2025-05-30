export interface User {
	id?: string;
	name: string;
	email: string;
}

export interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	loading: boolean;
}

export interface UserCredentials {
	email: string;
	password: string;
}

export interface RegisterCredentials extends UserCredentials {
	name: string;
}
