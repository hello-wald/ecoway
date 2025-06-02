export interface Payload<T> {
	success: boolean;
	message: string;
	data?: T;
}