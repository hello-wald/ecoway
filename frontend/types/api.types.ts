import { User } from "@/types/user.types";

export interface ApiResponse<T> {
	status: number;
	success: boolean;
	message: string;
	data?: T;
}

export interface AuthData {
	errors: Record<string, string>;
	user: User | null;
	token?: string;
}