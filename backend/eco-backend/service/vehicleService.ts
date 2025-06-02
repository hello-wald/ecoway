import { Payload } from '../model/payload';
import { VehicleRepository } from '../persistent/vechicleDA';
import { v4 as uuidv4 } from 'uuid';

const vehicleRepo = new VehicleRepository()

export async function createVehicle(
  user_id: string,
  vehicle_name: string,
  vehicle_number: string
): Promise<Payload<null>> {
  try {
    const vehicle_id = uuidv4();
    await vehicleRepo.createVehicle({
      vehicle_id,
      user_id,
      vehicle_name,
      vehicle_number,
    });

    return {
      success: true,
      message: 'Vehicle created successfully',
      data: null,
    };
  } catch (error) {
    console.error('Error creating vehicle:', error);
    return {
      success: false,
      message: 'Failed to create vehicle',
      data: null,
    };
  }
}
