
    // driver id
    // vehicle id
    // location
    // destination


    //output offer id
    
import { v4 as uuidv4 } from 'uuid';
import { createOffer, deleteOfferByOfferID, getAllOffer, getOfferByDriverID, getOfferByOfferID } from '../persistent/Mem-persistent/offerDA';
import { createConnection, getSSEConnection, sseConnections } from '../persistent/Mem-persistent/sseConnectionDA';
import { OfferModel } from '../model/offerModel';
import { createRequest, getRequestByID } from '../persistent/Mem-persistent/requestDA';
import { Location} from '../model/locationModel';
import { createOnGoingTransaction, deleteOnGoingTransactionByID, getOnGoingTransactionByID } from '../persistent/Mem-persistent/onGoingTransaction';
import { onGoingTransactionModel } from '../model/onGoingTransactionModel';
import { DestinationModel } from '../model/destinationModel';
import express from "express";

function makeCarpoolOfferService(
    driverId: string, // this is user id
    location: Location,
    destination: string, // this is destination id
    res:  express.Response
): Promise<string> {
    return new Promise((resolve, reject) => {
        // generate a unique offer ID using uuid
        const offerId = uuidv4()
        let offerID = createOffer(driverId, location, destination)
        if (offerID=="") {
            reject(new Error("Failed to create offer"));
        } else {
            // resolve the promise with the generated offer ID
            let successCreateConn = createConnection(offerId, res);
            if (!successCreateConn) {
                deleteOfferByOfferID(offerId)
                reject(new Error("Failed to create connection"));
            }
            resolve(offerId);
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
    userId: string,
): Promise<string> {
    return new Promise((resolve, reject) => {
        // generate a unique request ID using uuid
        const requestId = uuidv4()
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
        sseConn!.setHeader("Content-Type", "text/event-stream");
        sseConn!.write(`data: ${JSON.stringify(request)}\n\n`);
        // resolve the promise with the generated request ID
        resolve(reqID);
    });
}

function acceptRequest(offerId:string, requestId:string):Promise<string>{
    //create on going transaction
    return new Promise((resolve, reject) => {
        let offerData:OfferModel = getOfferByOfferID(offerId)
        if (offerData == undefined) reject("")
        let requestData = getRequestByID(requestId)
        if(requestData == undefined) reject("")
        
        const emptyLoc:Location = {
            'longitude':0,
            'latitude':0,
        }
        createOnGoingTransaction(
            offerData.driver_id,
            requestData!.user_id,
            offerData.destination_id,
            offerData.location,
            emptyLoc
        )
    }
)
}

function getAllOfferByDriverID(driverID:string){
    return new Promise((resolve, reject) => {
        let offers = getOfferByDriverID(driverID);
        // console.log(offers.length)
        if (offers.length > 0) {
            resolve(offers);
            console.log("failed to get offers")
        } else {
            reject(new Error("Failed to get offers"));
        }
        
    });
}

function getAllOfferService(){
    return getAllOffer()
}

function updatePostiion(onGoingTransactionID:string, userId:string,location:Location): boolean{
    let onGoingTransaction:onGoingTransactionModel|undefined = getOnGoingTransactionByID(onGoingTransactionID)
    if (onGoingTransaction == undefined){
        return false
    }
    if (onGoingTransaction.driver_id == userId){
        onGoingTransaction.driver_location = location;
        return true
    }else if( onGoingTransaction.passenger_id == userId){
        onGoingTransaction.passenger_location = location
        return true
    }else{
        return false;
    }
}

function endTrip(onGoingTransactionId: string):boolean{
    return deleteOnGoingTransactionByID(onGoingTransactionId)
}

function getDestinationData(destinationID:string):DestinationModel{
    const destination = getDestinationData(destinationID)
    return destination;
}

function getAllDestination():DestinationModel[]{
    const destinations = getAllDestination();
    return destinations; 
}


export { createRequestService,
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
    getAllOfferService
}