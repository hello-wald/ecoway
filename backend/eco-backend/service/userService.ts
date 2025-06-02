import bcrypt from 'bcrypt';
import { UserRepository } from '../persistent/userDA';
import { v4 as uuidv4 } from 'uuid';
import { UserResponse } from '../model/userModel';
import jwt from 'jsonwebtoken';
import { Payload } from "../model/payload";

const userRepo = new UserRepository()

export async function register(email: string, password: string, name: string, phone: string = ''): Promise<Payload<{
	errors: Record<string, string>
	user: UserResponse | null
	token?: string
}>> {
	const existingUser = await userRepo.getUserByEmail(email);
	if (existingUser) {
		return {
			success: false,
			message: 'Email has already been taken',
			data: { errors: { email: 'Email has already been taken' }, user: null }
		};
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
		return {
			success: false,
			message: 'Failed to register user',
			data: { errors: { general: 'Failed to register user' }, user: null }
		};
	}

	const token = jwt.sign({ user_id: userId }, process.env.JWT_SECRET!, {
		expiresIn: '7d',
	});

	return {
		success: true,
		message: 'User registered successfully',
		data: {
			errors: {},
			user: {
				user_id: userId,
				user_email: email,
				user_name: name,
				user_phone: phone,
				user_profile_picture: "/assets/profile_picture/default.jpeg"
			},
			token
		}
	};
}

export async function login(email: string, password: string): Promise<Payload<{
	errors: Record<string, string>
	user: UserResponse | null
	token?: string
}>> {
	const user = await userRepo.getUserByEmail(email);
	if (!user) return {
		success: false,
		message: 'User not found',
		data: { errors: { email: 'User not found' }, user: null }
	};

	const isMatch = await bcrypt.compare(password, user.user_password);
	if (!isMatch) return {
		success: false,
		message: 'Invalid credentials',
		data: { errors: { password: 'Invalid credentials' }, user: null }
	};

	const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET!, {
		expiresIn: '7d',
	});

	return {
		success: true,
		message: 'Login successful',
		data: {
			errors: {},
			user: user,
			token
		}
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

export async function updateProfilePicture(file_path: string, user_id: string): Promise<{
	success: boolean;
	message: string;
}> {
	try {
		const user = await userRepo.getUserById(user_id);
		if (!user) {
			return { success: false, message: 'User not found' };
		}

		const updated = await userRepo.updateUser(user_id, {
			user_profile_picture: file_path,
		});

		if (!updated) {
			return { success: false, message: 'Failed to update profile picture' };
		}

		return { success: true, message: 'Profile picture updated successfully' };
	} catch (error) {
		console.error('Error in updateProfilePicture:', error);
		return { success: false, message: 'An error occurred while updating profile picture' };
	}
}
