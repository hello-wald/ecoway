import express from 'express';
import multer from 'multer';
import { upload } from '../controller/userController';
import { handleCreateDestination } from '../controller/destinationController';

const router = express.Router();

router.post('/create', upload.none(), handleCreateDestination)

export default router;
