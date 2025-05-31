import bcrypt from 'bcrypt';
import { UserRepository } from '../persistent/userDA';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from '../model/userModel';
import jwt from 'jsonwebtoken';

const userRepo = new UserRepository()

export async function register(email: string, password: string, name: string, phone: string = ''): Promise<{ success: boolean; message: string }> {
    const existingUser = await userRepo.getUserByEmail(email);
    if (existingUser) {
        return { success: false, message: 'Email has already been taken' };
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const userId = uuidv4()
    const success = await userRepo.createUser({
        user_id: userId,
        user_email: email,
        user_password: hashedPassword,
        user_name: name,
        user_phone: phone,
        user_profile_picture: "/assets/profile_picture/default.jpeg"
    });

    if (!success) {
        return { success: false, message: 'Failed to register user' };
    }

    return { success: true, message: 'User registered successfully' };
}

export async function login(email: string, password: string): Promise<{
  success: boolean;
  message: string;
  token?: string;
}> {
  const user = await userRepo.getUserByEmail(email);
  if (!user) return { success: false, message: 'User not found' };

  const isMatch = await bcrypt.compare(password, user.user_password);
  if (!isMatch) return { success: false, message: 'Invalid credentials' };

  const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  });

  return {
    success: true,
    message: 'Login successful',
    token
  };
}

export async function changePassword(
  new_password: string,
  old_password: string,
  user_id: string
): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    const user = await userRepo.getUserById(user_id);
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    const isOldPasswordCorrect = await bcrypt.compare(old_password, user.user_password);
    if (!isOldPasswordCorrect) {
      return { success: false, message: 'Old password is incorrect' };
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);

    const updated = await userRepo.updateUser(user_id, {
      user_password: hashedPassword,
    });

    if (!updated) {
      return { success: false, message: 'Failed to update password' };
    }

    return { success: true, message: 'Password updated successfully' };
  } catch (error) {
    console.error('Error in changePassword:', error);
    return { success: false, message: 'An error occurred while updating password' };
  }
}

