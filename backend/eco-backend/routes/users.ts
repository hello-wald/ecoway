import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { handleRegister, handleLogin } from '../controller/userController';

const router = express.Router();
const upload = multer();

// POST /users/register
router.post('/register', upload.none(), handleRegister);

// POST /users/login
router.post('/login', upload.none(), handleLogin);

export default router;
