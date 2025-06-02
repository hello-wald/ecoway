import { AxiosResponse, isAxiosError } from 'axios';
import { ApiResponse } from '@/types';

export async function handleApiCall<T>(
	apiCall: () => Promise<AxiosResponse<ApiResponse<T>>>
): Promise<ApiResponse<T>> {
	try {
		const response = await apiCall();
		return response.data;
	} catch (error) {
		if (isAxiosError(error) && error.response) {
			return error.response.data;
		}
		// for non-axios errors, return a generic error
		return {
			success: false,
			message: 'An unexpected error occurred',
		};
	}
}