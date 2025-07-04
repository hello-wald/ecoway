export interface User {
	id: string;
	name: string;
	email: string;
	phone: string;
	profilePicture: string;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface RegisterCredentials extends LoginCredentials {
	name: string;
}
