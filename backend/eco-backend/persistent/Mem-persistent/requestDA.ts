// Import the model
import { off } from "process";
import "../../model/requestModel"
import { requestModel } from "../../model/requestModel"

// In-memory store for requests
const RequestMap: Map<string, requestModel> = new Map();

// Utility: generate a unique request ID
function generateRequestID(length: number): string {
    let generatedID = "";
    for (let i = 0; i < length; i++) {
        const randNum = Math.floor(Math.random() * 10);
        generatedID += randNum;
    }
    return generatedID;
}

// Create a new request
export function createRequest(userId: string, offerId: string): string {
    const requestID: string = generateRequestID(6);
    const newRequest: requestModel = {
        request_id: requestID,
        user_id: offerId,
        offer_id: userId,
        date: Date.now().toString(),
    };
    RequestMap.set(requestID, newRequest);
    return requestID;
}

// Retrieve a request by ID
export function getRequestByID(requestID: string): requestModel | undefined {
    return RequestMap.get(requestID);
}

// Delete a request by ID
export function deleteRequestByID(requestID: string): boolean {
    return RequestMap.delete(requestID);
}

// Update request date
export function updateRequestDate(requestID: string, newDate: string): boolean {
    let request = RequestMap.get(requestID);
    if (!request) {
        return false;
    }
    request.date = newDate;
    return true;
}


export function getAllRequests():requestModel[]{
    let requests:requestModel[] = []
    for (let req of RequestMap.values()){
        requests.push(req)
    }
    return requests
}

// Get all requests by offer ID
export function getRequestsByOfferID(offerID: string): requestModel[] {
    const requests: requestModel[] = [];
    for (const request of RequestMap.values()) {
        if (request.offer_id === offerID) {
            requests.push(request);
        }
    }
    return requests;
}
