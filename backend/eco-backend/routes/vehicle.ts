import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { handleCreateVehicle } from '../controller/vehicleController';

const router = express.Router();
const upload = multer();

// POST /users/register
router.post('/create/vehicle', upload.none(), handleCreateVehicle);


export default router;
