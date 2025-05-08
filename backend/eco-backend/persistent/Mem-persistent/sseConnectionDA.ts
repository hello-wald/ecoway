//linked user response 
import express from "express";

express.response
const sseConnections = new Map<string, any>();

// 1. CREATE: Add a new response to the map
function createConnection(offerID: string, res: Response): boolean {
    if (sseConnections.has(offerID)) {
        return false; // Connection already exists
    }
    sseConnections.set(offerID, res);
    return true;
}

// 2. READ: Retrieve a response from the map using offerID
function getConnection(offerID: string): Response | undefined {
    return sseConnections.get(offerID);
}

// 3. UPDATE: Modify the response (e.g., send data) for a given offerID
function updateConnection(offerID: string, data: string): boolean {
    const res = sseConnections.get(offerID);
    if (res) {
        res.write(`data: ${data}\n\n`);
        return true;
    }
    return false;
}

// 4. DELETE: Remove a response from the map using offerID
function deleteConnection(offerID: string): boolean {
    return sseConnections.delete(offerID);
}

export { createConnection, getConnection, updateConnection, deleteConnection };
