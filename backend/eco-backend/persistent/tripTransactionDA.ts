import { PrismaClient } from "../generated/prisma";
import { TripTransactionModel } from "../model/tripTransactionModel";

const prisma = new PrismaClient();

export class TripTransactionRepository {
  // Create a trip and return true if successful, false otherwise
  async createTrip(data: TripTransactionModel): Promise<boolean> {
    try {
      await prisma.tripTransaction.create({ data });
      return true;
    } catch (error) {
      console.error("Failed to create trip:", error);
      return false;
    }
  }

  // Get a trip by ID, including customer, driver, and destination, returning the trip or null
  async getTripById(trip_id: string): Promise<TripTransactionModel | null> {
    return await prisma.tripTransaction.findUnique({
      where: { trip_id },
      include: {
        customer: true,
        driver: true,
        destination: true,
      },
    });
  }

  // Get all trips, including customer, driver, and destination
  async getAllTrips(): Promise<TripTransactionModel[]> {
    return await prisma.tripTransaction.findMany({
      include: {
        customer: true,
        driver: true,
        destination: true,
      },
    });
  }

  // Get trips by customer ID, including driver and destination
  async getTripsByCustomerId(
    customer_id: string
  ): Promise<TripTransactionModel[]> {
    return await prisma.tripTransaction.findMany({
      where: { customer_id },
      include: {
        driver: true,
        destination: true,
      },
    });
  }

  // Get trips by driver ID, including customer and destination
  async getTripsByDriverId(driver_id: string): Promise<TripTransactionModel[]> {
    return await prisma.tripTransaction.findMany({
      where: { driver_id },
      include: {
        customer: true,
        destination: true,
      },
    });
  }

  // Update a trip and return true if successful, false otherwise
  async updateTrip(
    trip_id: string,
    data: {
      customer_id?: string;
      driver_id?: string;
      destination_id?: string;
      trip_date?: Date;
      trip_point?: number;
    }
  ): Promise<boolean> {
    try {
      await prisma.tripTransaction.update({
        where: { trip_id },
        data,
      });
      return true;
    } catch (error) {
      console.error("Failed to update trip:", error);
      return false;
    }
  }

  // Delete a trip and return true if successful, false otherwise
  async deleteTrip(trip_id: string): Promise<boolean> {
    try {
      await prisma.tripTransaction.delete({
        where: { trip_id },
      });
      return true;
    } catch (error) {
      console.error("Failed to delete trip:", error);
      return false;
    }
  }
}
