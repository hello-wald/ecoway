export class AppError extends Error {
	code?: string;
	statusCode?: number;

	constructor(message: string, code?: string, statusCode?: number) {
		super(message);
		this.name = "AppError";
		this.code = code;
		this.statusCode = statusCode;
	}
}

const errorMap: Record<number, string> = {
	400: "Please check your input and try again.",
	401: "Invalid credentials. Please check your email and password.",
	403: "Access denied. Please check your permissions.",
	409: "This email is already registered. Please use a different email or try signing in.",
};

export const handleApiError = (error: any): AppError => {
	if (!error?.response) {
		return new AppError(
			"Network error. Please check your connection and try again."
		);
	}

	const { status, data } = error.response;
	const message =
		data?.message || errorMap[status] || "An unexpected error occurred";

	if (errorMap[status]) {
		return new AppError(message, undefined, status);
	}

	if (status >= 500) {
		return new AppError(
			"Server error. Please try again later.",
			undefined,
			status
		);
	}

	return new AppError(message, undefined, status);
};

export const getErrorMessage = (error: unknown): string =>
	error instanceof Error
		? error.message
		: typeof error === "string"
		? error
		: "An unexpected error occurred";
