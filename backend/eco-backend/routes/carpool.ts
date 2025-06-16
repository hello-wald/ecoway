import express from 'express';
import multer from 'multer';
import { upload } from '../controller/userController';
import { handleAcceptOffer, handleCreateOffer, handleDeleteOffer, handleGetAllOffers, handleGetAllRequests, handleGetOfferByDriverId, handleGetOfferById, handleGetRequestsByOfferId, handleRequestOffer } from '../controller/carpoolController';

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

export default router;
