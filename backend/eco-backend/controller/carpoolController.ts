import express, { Request, Response } from "express";
import {
  createRequestService,
  getAllOffer,
  acceptRequest,
  makeCarpoolOfferService,
  cancelCarpoolOfferService,
  getCarpoolOfferService,
  getOfferByDriverIDService,
  endTrip,
  updatePostiion,
  getDestinationData,
  getAllDestination,
} from "../services/Carpooling"; // adjust path as needed

const router = express.Router();

// Create Offer
router.post("/offer", async (req: Request, res: Response) => {
  const { driverId, vehicleId, location, destination } = req.body;
  try {
    const offerId = await makeCarpoolOfferService(
      driverId,
      vehicleId,
      location,
      destination,
      res
    );
    res.status(201).json({ offerId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Cancel Offer
router.delete("/offer/:offerId", async (req: Request, res: Response) => {
  try {
    const success = await cancelCarpoolOfferService(req.params.offerId);
    res.status(200).json({ success });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Offer by ID
router.get("/offer/:offerId", async (req: Request, res: Response) => {
  try {
    const offer = await getCarpoolOfferService(req.params.offerId);
    res.status(200).json(offer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get Offers by Driver ID
router.get("/offers/driver/:driverId", async (req: Request, res: Response) => {
  try {
    const offers = await getOfferByDriverIDService(req.params.driverId);
    res.status(200).json(offers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Create Request for an Offer
router.post("/request", async (req: Request, res: Response) => {
  const { offerId, userId } = req.body;
  try {
    const requestId = await createRequestService(offerId, userId);
    res.status(201).json({ requestId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Accept Request
router.post("/accept", async (req: Request, res: Response) => {
  const { offerId, requestId } = req.body;
  try {
    await acceptRequest(offerId, requestId);
    res.status(200).json({ message: "Request accepted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Offers
router.get("/offers", async (req: Request, res: Response) => {
  try {
    const offers = await getAllOffer();
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update User Position
router.post("/position", (req: Request, res: Response) => {
  const { onGoingTransactionID, userId, location } = req.body;
  const success = updatePostiion(onGoingTransactionID, userId, location);
  if (success) {
    res.status(200).json({ message: "Position updated" });
  } else {
    res.status(400).json({ message: "Failed to update position" });
  }
});

// End Trip
router.delete("/trip/:transactionId", (req: Request, res: Response) => {
  const success = endTrip(req.params.transactionId);
  if (success) {
    res.status(200).json({ message: "Trip ended" });
  } else {
    res.status(400).json({ message: "Failed to end trip" });
  }
});

// Get Destination by ID
router.get("/destination/:destinationId", (req: Request, res: Response) => {
  try {
    const destination = getDestinationData(req.params.destinationId);
    res.status(200).json(destination);
  } catch (error) {
    res.status(404).json({ message: "Destination not found" });
  }
});

// Get All Destinations
router.get("/destinations", (req: Request, res: Response) => {
  try {
    const destinations = getAllDestination();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve destinations" });
  }
});

export default router;
