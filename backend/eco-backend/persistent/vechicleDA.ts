import { PrismaClient } from "../generated/prisma";
import { VehicleModel } from '../model/vehicleModel'; // adjust path if needed

const prisma = new PrismaClient();

export class VehicleRepository {
  // Create a vehicle and return true if successful, false otherwise
  async createVehicle(data: VehicleModel): Promise<boolean> {
    try {
      await prisma.msVehicle.create({ data });
      return true;
    } catch (error) {
      console.error('Failed to create vehicle:', error);
      return false;
    }
  }

  // Get vehicle by ID, returning VehicleModel or null
  async getVehicleById(vehicle_id: string): Promise<VehicleModel | null> {
    return await prisma.msVehicle.findUnique({
      where: { vehicle_id },
    });
  }

  // Get all vehicles, returning an array of VehicleModels
  async getAllVehicles(): Promise<VehicleModel[]> {
    return await prisma.msVehicle.findMany();
  }

  // Update a vehicle and return true if successful, false otherwise
  async updateVehicle(
    vehicle_id: string,
    data: Partial<Omit<VehicleModel, 'vehicle_id'>> // Partial for optional fields
  ): Promise<boolean> {
    try {
      await prisma.msVehicle.update({
        where: { vehicle_id },
        data,
      });
      return true;
    } catch (error) {
      console.error('Failed to update vehicle:', error);
      return false;
    }
  }

  // Delete a vehicle and return true if successful, false otherwise
  async deleteVehicle(vehicle_id: string): Promise<boolean> {
    try {
      await prisma.msVehicle.delete({
        where: { vehicle_id },
      });
      return true;
    } catch (error) {
      console.error('Failed to delete vehicle:', error);
      return false;
    }
  }
}
