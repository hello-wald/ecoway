import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { handleRegister, handleLogin, handleChangePassword } from '../controller/userController';

const router = express.Router();
const upload = multer();

// POST /users/register
router.post('/register', upload.none(), handleRegister);

// POST /users/login
router.post('/login', upload.none(), handleLogin);

router.post('/change/password', upload.none(), handleChangePassword);

export default router;
