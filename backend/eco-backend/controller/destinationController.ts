import { createDestination } from "../service/destinationService";
import { Request, Response } from "express";

export async function handleCreateDestination(req: Request, res: Response): Promise<void> {
  const { destination_name, latitude, longitude } = req.body;
  const latitude_float = parseFloat(req.body.latitude);
  const longitude_float = parseFloat(req.body.longitude);


  if (!destination_name || !latitude || !longitude) {
    res.status(400).json({
      success: false,
      message: 'Missing required fields',
      data: null,
    });
    return;
  }

  try {
    const result = await createDestination(destination_name, latitude_float, longitude_float);
    res.status(result.success ? 201 : 500).json(result);
  } catch (error) {
    console.error('Error in handleCreateDestination:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      data: null,
    });
  }
}