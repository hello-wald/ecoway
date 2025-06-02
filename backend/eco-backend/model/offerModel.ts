import { Location } from "./locationModel"
export interface OfferModel{
    offer_id:string
    driver_id:string
    destination_id: string
    location: Location
}