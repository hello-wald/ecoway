import "../../model/offerModel"
import { OfferModel } from "../../model/offerModel"
// pair offer id and offer object

const OfferMap: Map<string, any> = new Map();

export function createOffer(driverID:string, vehicleID, location:Location, destinationID:string):Boolean{
    const offerID:string = generateOfferID(5)
    const newOffer:OfferModel = {
        offer_id: offerID,
        driver_id:driverID,
        vehicle_id:vehicleID,
        destination_id: destinationID,
        location: location
    }
    return false
}

export function getOfferByOfferID(offerID:string):OfferModel{
    return OfferMap.get(offerID)
}

export function deleteOfferByOfferID(offerID:string):Boolean{
    return OfferMap.delete(offerID)
}

export function updateOfferLocation(offerID:string, newLocation:Location):Boolean{
    let offer:OfferModel = OfferMap.get(offerID)
    if (!offer){
        return false
    }
    offer.location = newLocation
    return true
}

function generateOfferID(length): string{
    let generatedID =""
    for( let i =0; i< length; i++){
        const randNum = Math.floor(Math.random() * 10)
        generatedID+=randNum
    }
    return generatedID
}