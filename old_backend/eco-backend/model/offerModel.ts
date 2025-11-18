import { Location } from "./locationModel"
import { DestinationModel } from "./destinationModel";

export interface OfferModel{
    offer_id:string
    driver_id:string
    destination: DestinationModel,
    location: Location
}