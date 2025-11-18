import { Destination, Location } from "@/types/destination.types";

export interface RideOfferRequest {
	driver_id?: string;
	destination: Destination;
	location: Location;
}

export interface RideOffer {
	offer_id: string;
	driver_id: string;
	driver_name: string;
	destination: Destination;
	location: Location;
	status?: string;
}

export interface RideRequestPayload {
	offerId: string;
	userId: string;
}

export interface RideRequest {
	request_id: string;
	offer_id: string;
	user_id: string;
	date?: Date;
	status?: string;
	user?: {
		id?: string;
		name?: string;
		email?: string;
		profilePicture?: string;
	};
}

export interface Ride {
	offerId: string;
	requestId: string;
}
