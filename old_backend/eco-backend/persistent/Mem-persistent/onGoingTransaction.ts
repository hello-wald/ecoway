// Import the model
import "../../model/onGoingTransactionModel"
import { onGoingTransactionModel } from "../../model/onGoingTransactionModel"
import { Location } from "../../model/locationModel"

// In-memory store for ongoing transactions
const OnGoingTransactionMap: Map<string, onGoingTransactionModel> = new Map();

// Utility: generate a unique transaction ID
function generateTransactionID(length: number): string {
    let generatedID = "";
    for (let i = 0; i < length; i++) {
        const randNum = Math.floor(Math.random() * 10);
        generatedID += randNum;
    }
    return generatedID;
}

// Create a new ongoing transaction
export function createOnGoingTransaction(
    driverId: string,
    passengerId: string,
    destinationId: string,
    driverLocation: Location,
    passengerLocation: Location
): string{
    const transactionID: string = generateTransactionID(6);
    const newTransaction: onGoingTransactionModel = {
        on_transaction_id: transactionID,
        driver_id: driverId,
        passenger_id: passengerId,
        destination_id: destinationId,
        driver_location: driverLocation,
        passenger_location: passengerLocation
    };
    OnGoingTransactionMap.set(transactionID, newTransaction);
    return transactionID;
}

// Get an ongoing transaction by ID
export function getOnGoingTransactionByID(transactionID: string): onGoingTransactionModel | undefined {
    return OnGoingTransactionMap.get(transactionID);
}

// Delete an ongoing transaction by ID
export function deleteOnGoingTransactionByID(transactionID: string): boolean {
    return OnGoingTransactionMap.delete(transactionID);
}

// Update driver's location in transaction
export function updateDriverLocation(transactionID: string, newLocation: Location): boolean {
    let transaction = OnGoingTransactionMap.get(transactionID);
    if (!transaction) {
        return false;
    }
    transaction.driver_location = newLocation;
    return true;
}

// Update passenger's location in transaction
export function updatePassengerLocation(transactionID: string, newLocation: Location): boolean {
    let transaction = OnGoingTransactionMap.get(transactionID);
    if (!transaction) {
        return false;
    }
    transaction.passenger_location = newLocation;
    return true;
}

export function getOnGoingTransactionByDriverId(driverId: string): onGoingTransactionModel[] {
    const transactions: onGoingTransactionModel[] = [];
    for (const transaction of OnGoingTransactionMap.values()) {
        if (transaction.driver_id === driverId) {
            transactions.push(transaction);
        }
    }
    return transactions;
}

export function getOnGoingTransactionByPassengerId(passengerId: string): onGoingTransactionModel[] {
    const transactions: onGoingTransactionModel[] = [];
    for (const transaction of OnGoingTransactionMap.values()) {
        if (transaction.passenger_id === passengerId) {
            transactions.push(transaction);
        }
    }
    return transactions;
}