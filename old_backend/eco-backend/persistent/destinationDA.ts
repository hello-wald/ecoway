import { PrismaClient } from "../generated/prisma";
import { DestinationModel } from "../model/destinationModel";

const prisma = new PrismaClient();

export class DestinationRepository {
    async createDestination(data: DestinationModel): Promise<boolean> {
        try {
          // @ts-ignore
          await prisma.msDestination.create({ data });
          return true;
        } catch (error) {
          console.error('Failed to create destination:', error);
          return false;
        }
      }
      

    async getDestinationById(destination_id: string): Promise<DestinationModel | null> {
        return await prisma.msDestination.findUnique({
            where: { destination_id },
        });
    }

  async getAllDestinations(): Promise<DestinationModel[]> {
    return await prisma.msDestination.findMany();
  }

  async updateDestination(
    destination_id: string,
    data: {
      destination_name?: string;
      latitude?: number;
      longitude?: number;
    }
  ): Promise<boolean> {
    try {
      await prisma.msDestination.update({
        where: { destination_id },
        data,
      });
      return true;
    } catch (error) {
      console.error('Failed to update destination:', error);
      return false;
    }
  }
  
  async deleteDestination(destination_id: string): Promise<boolean> {
    try {
      await prisma.msDestination.delete({
        where: { destination_id },
      });
      return true;
    } catch (error) {
      console.error('Failed to delete destination:', error);
      return false;
    }
  }
}  
