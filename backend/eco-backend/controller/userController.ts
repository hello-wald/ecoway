import { Request, Response } from 'express';
import { register, login } from '../service/userService';

export async function handleRegister(req: Request, res: Response): Promise<void> {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        res.status(400).json({ success: false, message: 'Missing required fields' });
        return;
    }

    try {
        const result = await register(email, password, name);
        res.status(result.success ? 201 : 400).json(result);
    } catch (err) {
        res.status(500).json({ success: false, message: err });
    }
}

export async function handleLogin(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
        const result = await login(email, password);
        res.status(result.success ? 200 : 401).json(result);
    } catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
}
