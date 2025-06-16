//linked user response 
import express from "express";

const sseConnections = new Map<string, express.Response>();

// 1. CREATE: Add a new response to the map
function createConnection(offerID: string, res: express.Response): boolean {
    if (sseConnections.has(offerID)) {
        return false; // Connection already exists
    }
    sseConnections.set(offerID, res);
    return true;
}

// 2. READ: Retrieve a response from the map using offerID
function getSSEConnection(offerID: string): express.Response | undefined {
    return sseConnections.get(offerID);
}

// 3. UPDATE: Modify the response (e.g., send data) for a given offerID
function updateSSEConnection(offerID: string, data: string): boolean {
    const res = sseConnections.get(offerID);
    if (res) {
        res.setHeader("Content-Type", "text/event-stream");
        res.write(`data: ${data}\n\n`);
        return true;
    }
    return false;
}

// 4. DELETE: Remove a response from the map using offerID
function deleteSSEConnection(offerID: string): boolean {
    return sseConnections.delete(offerID);
}


export {
    createConnection,
    getSSEConnection,
    updateSSEConnection,
    deleteSSEConnection,
    sseConnections,
};
