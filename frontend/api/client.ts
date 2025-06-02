import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { AUTH_TOKEN_KEY } from "@/lib/constants";

const ApiClient = axios.create({
	baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/',
	headers: {
		'Content-Type': 'application/json',
	},
})

ApiClient.interceptors.request.use(
	async (config) => {
		const token = await SecureStore.getItemAsync(AUTH_TOKEN_KEY);
		config.headers.Authorization = token ? `Bearer ${token}` : '';
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export { ApiClient };