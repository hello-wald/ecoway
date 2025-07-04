import express, { Request, Response } from "express";
import {
  createRequestService,
  getAllOfferService,
  acceptRequest,
  makeCarpoolOfferService,
  cancelCarpoolOfferService,
  getCarpoolOfferService,
  getOfferByDriverIDService,
  endTrip,
  updatePostiion,
  getDestinationData,
  getAllDestination,
  getAllRequestService,
  getRequestsByOffer,
  declineRequest,
  getTripTransactionByCustomerId,
  getTripTransactionByDriverId,
  getOnGoingTransactionByPassenger,
} from "../services/Carpooling"; // adjust path as needed
import { Location } from "../model/locationModel";
import { sseConnections } from "../persistent/Mem-persistent/sseConnectionDA";
import { getOnGoingTransactionByDriverId } from "../persistent/Mem-persistent/onGoingTransaction";

export async function handleCreateOffer(req: Request, res: Response): Promise<void> {
  const { driver_id } = req.body;
  const latitude_float = Number(req.body.location.latitude);
  const longitude_float = Number(req.body.location.longitude);
  const destination_name = req.body.destination.name;
  const destination_lat = Number(req.body.destination.latitude);
  const destination_long = Number(req.body.destination.longitude);

  const destination = {
    destination_name,
    latitude: destination_lat,
    longitude: destination_long
  };

  const location: Location = {
    longitude: longitude_float,
    latitude: latitude_float
  }

  try {
    const offer_id = await makeCarpoolOfferService(
      driver_id,
      location,
      destination,
      res
    );

    res.status(201).json({ offer_id });

  } catch (error) {
    res.status(500).json({ message: error});
  }
}

export async function handleDeleteOffer(req: Request, res: Response): Promise<void> {
  try {
    const success = await cancelCarpoolOfferService(req.params.offerId);
    res.status(200).json({ success });
  } catch (error) {
    res.status(500).json({ message: error});
  }
}

export async function handleGetOfferById(req: Request, res: Response): Promise<void> {
  try {
    const offer = await getCarpoolOfferService(req.params.offerId);
    res.status(200).json(offer);
  } catch (error) {
    res.status(404).json({ message: error });
  }
}

export async function handleGetAllOffers(req: Request, res: Response): Promise<void> {
  try {
    const offers = await getAllOfferService();
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function handleGetOfferByDriverId(req: Request, res: Response): Promise<void> {
 try {
    const offers = await getOfferByDriverIDService(req.params.driverId);
    res.status(200).json(offers);
  } catch (error) {
    res.status(404).json({ message: error });
  }
}

export async function handleRequestOffer(req: Request, res: Response): Promise<void> {
  const { offerId, userId } = req.body;
  try {
    const requestId = await createRequestService(offerId, userId);
    res.status(201).json({ requestId });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}


export async function handleAcceptOffer(req: Request, res: Response): Promise<void> {
  const { offerId, requestId } = req.body;
  try {
    let onTransactionId = await acceptRequest(offerId, requestId);
    res.status(200).json({
        onTransactionId: onTransactionId
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function handleGetAllRequests(req: Request, res: Response): Promise<void> {
  try {
    const requests= await getAllRequestService();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function handleGetRequestsByOfferId(req: Request, res: Response): Promise<void> {
  const { offerId } = req.params;
  try {
    const requests = await getRequestsByOffer(offerId);
    res.status(200).json(requests); 
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function handleDeclineRequest(req: Request, res: Response): Promise<void> {
  const { requestId } = req.params;
  try {
    const success = await declineRequest(requestId);
    if (success) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function handleUpdatePosition(req: Request, res: Response): Promise<void> {
  const { onGoingTransactionID, userId, longitude, latitude } = req.body;
  const location:Location = {
    longitude,
    latitude
  }
  const success = updatePostiion(onGoingTransactionID, userId, location);
  if (success) {
    res.status(200).json({ message: "Position updated" });
  } else {
    res.status(400).json({ message: "Failed to update position" });
  }
}

export async function handleEndTransaction(req: Request, res: Response): Promise<void> {
  try {
    const success = await endTrip(req.params.transactionId);

    if (success) {
      res.status(200).json({ message: "Trip ended", success: true });
    } else {
      res.status(400).json({ message: "Failed to end trip", success: false });
    }
  } catch (error) {
    console.error("Error ending trip:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
}

export async function handleGetTripTransactionByCustomerId(req: Request, res: Response): Promise<void> {
  const { customerId } = req.params;
  try {
    const trips = await getTripTransactionByCustomerId(customerId);
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function handleGetTripTransactionByDriverId(req: Request, res: Response): Promise<void> {
  const driverId = req.params.driverId;
  try {
    const trips = await getTripTransactionByDriverId(driverId);
    console.log('trips',trips);
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}


export async function handleGetEvents(req: Request, res: Response): Promise<void> {
  const offerId = req.params.offerId;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  sseConnections.set(offerId, res);

  const keepAlive = setInterval(() => {
    res.write(":\n\n"); 
  }, 15000);

  req.on("close", () => {
    clearInterval(keepAlive);
    sseConnections.delete(offerId);
  });
}

export async function handleGetOnGoingTransactionByDriverId(req: Request, res: Response): Promise<void> {
  const { driverId } = req.params;
  try {
    const ongoingTransactions = getOnGoingTransactionByDriverId(driverId);
    res.status(200).json(ongoingTransactions);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function handleGetOnGoingTransactionByPassengerId(req: Request, res: Response): Promise<void> {
  const { passengerId } = req.params;
  try {
    const ongoingTransactions = await getOnGoingTransactionByPassenger(passengerId);
    res.status(200).json(ongoingTransactions);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}