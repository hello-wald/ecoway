import express from 'express';
import multer from 'multer';
import { upload } from '../controller/userController';
import { handleAcceptOffer, handleCreateOffer, handleDeclineRequest, handleDeleteOffer, handleEndTransaction, handleGetAllOffers, handleGetAllRequests, handleGetEvents, handleGetOfferByDriverId, handleGetOfferById, handleGetOnGoingTransactionByDriverId, handleGetOnGoingTransactionByPassengerId, handleGetRequestsByOfferId, handleGetTripTransactionByCustomerId, handleGetTripTransactionByDriverId, handleRequestOffer, handleUpdatePosition } from '../controller/carpoolController';

const router = express.Router();

router.post('/create', upload.none(), handleCreateOffer)
router.delete('/cancel/:offerId', handleDeleteOffer);
router.get('/offer/:offerId', handleGetOfferById);
router.get('/offers', handleGetAllOffers)
router.get('/offers/driver/:driverId', handleGetOfferByDriverId);
router.post('/request', upload.none(), handleRequestOffer)
router.post('/accept', upload.none(), handleAcceptOffer)
router.get('/requests', handleGetAllRequests)
router.get('/request/:offerId', handleGetRequestsByOfferId)
router.delete('/decline/:requestId', handleDeclineRequest)
router.post('/position', upload.none(), handleUpdatePosition)
router.delete('/end/:transactionId', handleEndTransaction);
router.get('/history/d/:driverId', handleGetTripTransactionByDriverId);
router.get('/history/c/:customerId', handleGetTripTransactionByCustomerId)
router.get('/events/:offerId', handleGetEvents)
router.get('/ongoing/transactions/driver/:driverId', handleGetOnGoingTransactionByDriverId);
router.get('/ongoing/transactions/passenger/:passengerId', handleGetOnGoingTransactionByPassengerId);

export default router;
