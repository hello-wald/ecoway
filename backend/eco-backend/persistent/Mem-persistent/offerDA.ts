import "../../model/offerModel";
import { OfferModel } from "../../model/offerModel";
import { Location } from "../../model/locationModel";
import { DestinationModel } from "../../model/destinationModel";
// pair offer id and offer object

const OfferMap: Map<string, any> = new Map();

export interface OfferResponse extends OfferModel {
	driver_name: string;
}

export async function createOffer(
	driverID: string,
	location: Location,
	destinationName: DestinationModel,
	driverName: string
): Promise<string> {
	const offerID: string = generateOfferID(5);

	const newOffer: OfferResponse = {
		offer_id: offerID,
		driver_id: driverID,
		driver_name: driverName,
		destination: destinationName,
		location: location,
	};

	if (OfferMap.has(offerID)) {
		return ""; // offer id already exists
	}

	OfferMap.set(offerID, newOffer);
	return offerID;
}

export function getOfferByOfferID(offerID: string): OfferResponse {
	return OfferMap.get(offerID);
}

export function deleteOfferByOfferID(offerID: string): Boolean {
	return OfferMap.delete(offerID);
}

export function updateOfferLocation(
	offerID: string,
	newLocation: Location
): Boolean {
	let offer: OfferResponse = OfferMap.get(offerID);
	if (!offer) {
		return false;
	}
	offer.location = newLocation;
	return true;
}

function generateOfferID(length: number): string {
	let generatedID = "";
	for (let i = 0; i < length; i++) {
		const randNum = Math.floor(Math.random() * 10);
		generatedID += randNum;
	}
	return generatedID;
}

export function getOfferByDriverID(driverID: string): OfferResponse[] {
	let offers: OfferResponse[] = [];
	for (let offer of OfferMap.values()) {
		if (offer.driver_id === driverID) {
			offers.push(offer);
		}
	}
	return offers;
}

export function getAllOffer(): OfferResponse[] {
	let offers: OfferResponse[] = [];
	for (let offer of OfferMap.values()) {
		offers.push(offer);
	}
	return offers;
}
