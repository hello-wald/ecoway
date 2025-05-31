import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN_KEY } from '@/lib/constants/storage-keys';
import { handleApiError } from '@/lib/utils/error-handler';

export interface ApiResponse<T = any> {
	data: T;
	message?: string;
	success: boolean;
}

export interface ApiError {
	message: string;
	code?: string;
	statusCode?: number;
}

class ApiClient {
	private baseURL: string;

	constructor(baseURL: string = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api') {
		this.baseURL = baseURL;
	}

	private async getAuthToken(): Promise<string | null> {
		try {
			return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
		} catch {
			return null;
		}
	}

	private async request<T>(
		endpoint: string,
		options: RequestInit = {}
	): Promise<ApiResponse<T>> {
		const token = await this.getAuthToken();
		
		const config: RequestInit = {
			...options,
			headers: {
				'Content-Type': 'application/json',
				...(token && { Authorization: `Bearer ${token}` }),
				...options.headers,
			},
		};

		try {
			const url = endpoint.startsWith('http') ? endpoint : `${this.baseURL}${endpoint}`;
			const response = await fetch(url, config);
			const data = await response.json();

			if (!response.ok) {
				throw handleApiError({ response: { status: response.status, data } });
			}

			return data;
		} catch (error) {
			throw handleApiError(error);
		}
	}

	async get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, { ...options, method: 'GET' });
	}

	async post<T>(endpoint: string, body?: any, options?: RequestInit): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, {
			...options,
			method: 'POST',
			body: body ? JSON.stringify(body) : undefined,
		});
	}

	async put<T>(endpoint: string, body?: any, options?: RequestInit): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, {
			...options,
			method: 'PUT',
			body: body ? JSON.stringify(body) : undefined,
		});
	}

	async delete<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, { ...options, method: 'DELETE' });
	}
}

export const apiClient = new ApiClient();