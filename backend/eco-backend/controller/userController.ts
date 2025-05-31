import { Request, Response } from 'express';
import { register, login, changePassword } from '../service/userService';
import { getUserIdFromToken } from '../middleware/auth';

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
      res.status(200).json(result);
  
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
}

export async function handleChangePassword(req: Request, res: Response): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ success: false, message: 'No authorization token provided' });
    return;
  }

  const user_id = getUserIdFromToken(authHeader)
  if (!user_id){
    res.status(401).json({ success: false, message: 'Invalid token provided' });
    return;
  }

  const { old_password, new_password, confirm_password } = req.body;

  if (!old_password || !new_password || !confirm_password) {
    res.status(400).json({ success: false, message: 'All fields are required' });
    return;
  }

  if (new_password !== confirm_password) {
    res.status(400).json({ success: false, message: 'New password and confirmation do not match' });
    return;
  }

  try {
    const result = await changePassword(new_password, old_password, user_id);
    res.status(result.success ? 200 : 400).json(result);
  } catch (err) {
    console.error('Change password error:', err);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
}