import bcrypt from 'bcrypt';
import { UserRepository } from '../persistent/userDA';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from '../model/userModel';

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
  user?: UserModel; 
}> {
  const user = await userRepo.getUserByEmail(email);
  if (!user) return { success: false, message: 'User not found' };

  const isMatch = await bcrypt.compare(password, user.user_password);
  if (!isMatch) return { success: false, message: 'Invalid credentials' };

  return {
    success: true,
    message: 'Login Success',
    user: user
  };
}
