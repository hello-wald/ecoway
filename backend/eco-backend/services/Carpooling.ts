// driver id
// vehicle id
// location
// destination

//output offer id

import { v4 as uuidv4 } from "uuid";
import {
	createOffer,
	deleteOfferByOfferID,
	getAllOffer,
	getOfferByDriverID,
	getOfferByOfferID,
} from "../persistent/Mem-persistent/offerDA";
import {
	createConnection,
	getSSEConnection,
	sseConnections,
} from "../persistent/Mem-persistent/sseConnectionDA";
import { OfferModel } from "../model/offerModel";
import {
	createRequest,
	deleteRequestByID,
	getAllRequests,
	getRequestByID,
	getRequestsByOfferID,
} from "../persistent/Mem-persistent/requestDA";
import { Location } from "../model/locationModel";
import {
	createOnGoingTransaction,
	deleteOnGoingTransactionByID,
	getOnGoingTransactionByID,
} from "../persistent/Mem-persistent/onGoingTransaction";
import { onGoingTransactionModel } from "../model/onGoingTransactionModel";
import { DestinationModel } from "../model/destinationModel";
import express from "express";
import { requestModel } from "../model/requestModel";
import { Payload } from "../model/payload";
import { UserRepository } from "../persistent/userDA";
import { TripTransactionRepository } from "../persistent/tripTransactionDA";
import { on } from "events";
import { TripTransactionModel } from "../model/tripTransactionModel";

const ttr = new TripTransactionRepository()

function makeCarpoolOfferService(
	driverId: string, // this is user id
	location: Location,
	destination: DestinationModel, // this is destination name
	res: express.Response
): Promise<string> {
	return new Promise(async (resolve, reject) => {
		try {
			// Fetch driver's name before creating the offer
			const userRepo = new UserRepository();
			const driver = await userRepo.getUserById(driverId);
			const driverName = driver ? driver.user_name : "Unknown Driver";

			// Create offer with driver's name
			const offerID = await createOffer(
				driverId,
				location,
				destination,
				driverName
			);

			if (offerID === "") {
				reject(new Error("Failed to create offer"));
				return;
			}

			// Create connection
			const successCreateConn = createConnection(offerID, res);
			if (!successCreateConn) {
				deleteOfferByOfferID(offerID);
				reject(new Error("Failed to create connection"));
				return;
			}

			resolve(offerID);
		} catch (error) {
			reject(error);
		}
	});
}

function cancelCarpoolOfferService(offerId: string): Promise<boolean> {
	return new Promise((resolve, reject) => {
		let success = deleteOfferByOfferID(offerId);
		if (success) {
			resolve(true);
		} else {
			reject(new Error("Failed to cancel offer"));
		}
	});
}

function getCarpoolOfferService(offerId: string): Promise<OfferModel> {
	return new Promise((resolve, reject) => {
		let offer = getOfferByOfferID(offerId);
		if (offer) {
			resolve(offer);
		} else {
			reject(new Error("Failed to get offer"));
		}
	});
}
function getOfferByDriverIDService(driverId: string): Promise<OfferModel[]> {
	return new Promise((resolve, reject) => {
		let offers = getOfferByDriverID(driverId);
		if (offers.length > 0) {
			resolve(offers);
		} else {
			reject(new Error("Failed to get offers"));
		}
	});
}

function createRequestService(
	offerId: string,
	userId: string
): Promise<string> {
	return new Promise((resolve, reject) => {
		// generate a unique request ID using uuid
		const requestId = uuidv4();
		const reqID = createRequest(offerId, userId);
		const sseConn = getSSEConnection(offerId);
		if (!sseConn) {
			reject(new Error("Failed to get SSE connection"));
		}
		// create request object
		const request = {
			requestId: requestId,
			date: new Date(),
			userId: userId,
			offerId: offerId,
		};
		// send request to driver using SSE (notify the driver)
		sseConn!.write(`data: ${JSON.stringify(request)}\n\n`);
		// resolve the promise with the generated request ID
		resolve(reqID);
	});
}

function getAllRequestService(): Promise<Payload<requestModel[]>> {
	return new Promise((resolve, reject) => {
		let requests = getAllRequests();
		if (requests.length > 0) {
			resolve({
				data: requests,
				success: true,
				message: "Requests fetched successfully",
			});
		} else {
			reject(new Error("Failed to get requests"));
		}
	});
}

function acceptRequest(offerId: string, requestId: string): Promise<string> {
	//create on going transaction
	return new Promise((resolve, reject) => {
		let offerData: OfferModel = getOfferByOfferID(offerId);
		if (offerData == undefined) reject("");
		let requestData = getRequestByID(requestId);
		if (requestData == undefined) reject("");

		const emptyLoc: Location = {
			longitude: 0,
			latitude: 0,
		};
		let onTransactionId = createOnGoingTransaction(
			offerData.driver_id,
			requestData!.user_id,
			offerData.destination.destination_name,
			offerData.location,
			emptyLoc
		);
		resolve(onTransactionId);
	});
}

function getAllOfferByDriverID(driverID: string) {
	return new Promise((resolve, reject) => {
		let offers = getOfferByDriverID(driverID);
		// console.log(offers.length)
		if (offers.length > 0) {
			resolve(offers);
			console.log("failed to get offers");
		} else {
			reject(new Error("Failed to get offers"));
		}
	});
}

function getAllOfferService() {
	return getAllOffer();
}

function updatePostiion(
	onGoingTransactionID: string,
	userId: string,
	location: Location
): boolean {
	let onGoingTransaction: onGoingTransactionModel | undefined =
		getOnGoingTransactionByID(onGoingTransactionID);
	if (onGoingTransaction == undefined) {
		return false;
	}
	if (onGoingTransaction.driver_id == userId) {
		onGoingTransaction.driver_location = location;
		return true;
	} else if (onGoingTransaction.passenger_id == userId) {
		onGoingTransaction.passenger_location = location;
		return true;
	} else {
		return false;
	}
}

async function endTrip(onGoingTransactionId: string): Promise<boolean> {
	const ongoingTrip = getOnGoingTransactionByID(onGoingTransactionId);
	if (ongoingTrip == undefined) {
		return false;
	}

	const tripTransactionId = uuidv4();
	const tripTransaction: TripTransactionModel = {
		trip_id: tripTransactionId,
		driver_id: ongoingTrip.driver_id,
		customer_id: ongoingTrip.passenger_id,
		destination_id: ongoingTrip.destination_id, // ✅ Corrected
		trip_date: new Date(),
		trip_point: 0,
	};

	try {
		await ttr.createTrip(tripTransaction); // Assuming this returns Promise<void>
		deleteOnGoingTransactionByID(onGoingTransactionId);
		return true;
	} catch (error) {
		console.error("Failed to create trip:", error);
		return false;
	}
}



function getDestinationData(destinationID: string): DestinationModel {
	const destination = getDestinationData(destinationID);
	return destination;
}

function getAllDestination(): DestinationModel[] {
	const destinations = getAllDestination();
	return destinations;
}

function getRequestsByOffer(offerId: string): Promise<Payload<requestModel[]>> {
	return new Promise((resolve, reject) => {
		let requests = getRequestsByOfferID(offerId);
		resolve({
			data: requests,
			success: true,
			message: "Requests fetched successfully",
		});
	});
}

function declineRequest(requestId: string): boolean {
	// delete request by id
	return deleteRequestByID(requestId);
}

function getTripTransactionByCustomerId(
	customerId: string
): Promise<TripTransactionModel[]> {
	return ttr.getTripsByCustomerId(customerId);
}

function getTripTransactionByDriverId(
	driverId: string
): Promise<TripTransactionModel[]> {
	return ttr.getTripsByDriverId(driverId);
}

export {
	createRequestService,
	getAllOfferByDriverID,
	acceptRequest,
	makeCarpoolOfferService,
	cancelCarpoolOfferService,
	getCarpoolOfferService,
	getOfferByDriverIDService,
	endTrip,
	updatePostiion,
	getDestinationData,
	getAllDestination,
	getAllOfferService,
	getAllRequestService,
	getRequestsByOffer,
	declineRequest,
	getTripTransactionByCustomerId,
	getTripTransactionByDriverId,
};
