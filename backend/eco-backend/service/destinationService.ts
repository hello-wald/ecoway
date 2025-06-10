import { Payload } from "../model/payload";
import { v4 as uuidv4 } from 'uuid';
import { DestinationRepository } from "../persistent/destinationDA";

const destinationRepo = new DestinationRepository();

export async function createDestination(
  destination_name: string,
  latitude: number,
  longitude: number
): Promise<Payload<null>>{
    const destination_id = uuidv4();
    try {
        const success = await destinationRepo.createDestination({
            destination_id,
            destination_name,
            latitude,
            longitude
        });

        if (!success) {
            return {
                success: false,
                message: 'Failed to create destination shit',
                data: null
            };
        }

        return {
            success: true,
            message: 'Destination created successfully',
            data: null
        };
    } catch (error) {
        console.error('Error creating destination:', error);
        return {
            success: false,
            message: 'Failed to create destination',
            data: null
        };
    }   
}