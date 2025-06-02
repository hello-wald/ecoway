import "../../model/offerModel"
import { OfferModel } from "../../model/offerModel"
import { Location } from "../../model/locationModel"
// pair offer id and offer object

const OfferMap: Map<string, any> = new Map();

export function createOffer(driverID:string, vehicleID: string, location:Location, destinationID:string):string{
    const offerID:string = generateOfferID(5)
    const newOffer:OfferModel = {
        offer_id: offerID,
        driver_id:driverID,
        vehicle_id:vehicleID,
        destination_id: destinationID,
        location: location
    }
    if (OfferMap.has(offerID)){
        return "" // offer id already exists
    }
    OfferMap.set(offerID, newOffer)
    return offerID
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

function generateOfferID(length: number): string{
    let generatedID =""
    for( let i =0; i< length; i++){
        const randNum = Math.floor(Math.random() * 10)
        generatedID+=randNum
    }
    return generatedID

}

export function getOfferByDriverID(driverID:string):OfferModel[]{
    let offers:OfferModel[] = []
    for (let offer of OfferMap.values()){
        if (offer.driver_id === driverID){
            offers.push(offer)
        }
    }
    return offers
}

export function getAllOffer():OfferModel[]{
    let offers:OfferModel[] = []
    for (let offer of OfferMap.values()){
        offers.push(offer)
    }
    return offers
}