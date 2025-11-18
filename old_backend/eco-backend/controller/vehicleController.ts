import { Request, Response } from 'express';
import { Payload } from "../model/payload";
import { createVehicle } from "../service/vehicleService";

export async function handleCreateVehicle(req: Request, res: Response): Promise<void> {
  const { user_id, vehicle_name, vehicle_number } = req.body;

  // Optional: Basic validation
  if (!user_id || !vehicle_name || !vehicle_number) {
    const response: Payload<null> = {
      success: false,
      message: 'Missing required fields',
      data: null,
    };
    res.status(400).json(response);
    return;
  }

  const result: Payload<null> = await createVehicle(user_id, vehicle_name, vehicle_number);

  res.status(result.success ? 201 : 500).json(result);
}