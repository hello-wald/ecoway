export interface AppError {
	message: string;
	code?: string;
	statusCode?: number;
}

export class AuthError extends Error implements AppError {
	code?: string;
	statusCode?: number;

	constructor(message: string, code?: string, statusCode?: number) {
		super(message);
		this.name = "AuthError";
		this.code = code;
		this.statusCode = statusCode;
	}
}

export class NetworkError extends Error implements AppError {
	code?: string;
	statusCode?: number;

	constructor(message: string, code?: string, statusCode?: number) {
		super(message);
		this.name = "NetworkError";
		this.code = code;
		this.statusCode = statusCode;
	}
}

export const handleApiError = (error: any): AppError => {
	// Network error
	if (!error.response) {
		return new NetworkError(
			"Network error. Please check your connection and try again."
		);
	}

	const { status, data } = error.response;
	const message = data?.message || "An unexpected error occurred";

	// Authentication errors
	if (status === 401) {
		return new AuthError(
			"Invalid credentials. Please check your email and password."
		);
	}

	if (status === 403) {
		return new AuthError("Access denied. Please check your permissions.");
	}

	if (status === 409) {
		return new AuthError(
			"This email is already registered. Please use a different email or try signing in."
		);
	}

	// Validation errors
	if (status === 400) {
		return new AuthError(
			message || "Please check your input and try again."
		);
	}

	// Server errors
	if (status >= 500) {
		return new NetworkError("Server error. Please try again later.");
	}

	return new Error(message);
};

export const getErrorMessage = (error: unknown): string => {
	if (error instanceof Error) {
		return error.message;
	}

	if (typeof error === "string") {
		return error;
	}

	return "An unexpected error occurred";
};
