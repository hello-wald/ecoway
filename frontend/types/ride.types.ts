import { Destination, Location } from "@/types/destination.types";

export interface RideOfferRequest {
	driver_id: string;
	destination: Destination;
	location: Location
}

export interface RideOffer {
	offer_id: string;
	driver_id: string;
	driver_name: string;
	destination: Destination;
	location: Location;
}

export interface RideRequest {
	offerId: string;
	userId: string;
}

export interface Ride {
	offerId: string;
	requestId: string;
}