import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export interface AuthRequest extends Request {
  user?: any;
}

export async function checkAuthOptional(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    // No token = not logged in user
    req.user = null;
    return next();
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { user_id: string };

    const user = await prisma.msUser.findUnique({ where: { user_id: decoded.user_id } });

    if (!user) {
      req.user = null; // Token valid but user not found
    } else {
      req.user = user; // Token valid and user found
    }

    next();
  } catch (err: any) {
    // Token exists but is invalid or expired
    req.user = null;
    return next();
  }
}


export function getUserIdFromToken(token: string): string | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { user_id: string };
    return decoded.user_id;
  } catch (err) {
    console.error('Invalid token:', err);
    return null;
  }
}