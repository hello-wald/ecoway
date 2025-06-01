export interface TripTransactionModel {
    trip_id: string;
    customer_id: string;
    driver_id: string;
    destination_id: string;
    trip_date: Date;
    trip_point: number;
  }