import express from 'express';
import multer from 'multer';
import { upload } from '../controller/userController';
import { handleCreateDestination, handleGetAllDestinations } from '../controller/destinationController';

const router = express.Router();

router.post('/create', upload.none(), handleCreateDestination)
router.get('/all', upload.none(), handleGetAllDestinations);

export default router;
