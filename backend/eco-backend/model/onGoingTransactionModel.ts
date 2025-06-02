import { Location } from "./locationModel"
export interface onGoingTransactionModel{
    on_transaction_id: string
    driver_id:string
    passenger_id:string
    vehicle_id:string
    destination_id: string
    driver_location: Location
    passenger_location: Location
}