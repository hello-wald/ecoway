export interface OngoingTransaction {
	on_transaction_id: string
	driver_id:string
	passenger_id:string
	destination_id: string
	driver_location: Location
	passenger_location: Location
}

export interface AcceptRequestData {
	offerId: string
	requestId: string
}