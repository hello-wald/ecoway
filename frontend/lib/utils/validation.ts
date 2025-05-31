export interface ValidationResult {
	isValid: boolean;
	errors: Record<string, string>;
}

export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	if (!email.trim()) {
		return { isValid: false, error: 'Email is required' };
	}
	
	if (!emailRegex.test(email)) {
		return { isValid: false, error: 'Please enter a valid email address' };
	}
	
	return { isValid: true };
};

export const validatePassword = (password: string): { isValid: boolean; error?: string } => {
	if (!password) {
		return { isValid: false, error: 'Password is required' };
	}

	return { isValid: true };
};

export const validateName = (name: string): { isValid: boolean; error?: string } => {
	if (!name.trim()) {
		return { isValid: false, error: 'Name is required' };
	}
	
	return { isValid: true };
};

export const validateSignInForm = (email: string, password: string): ValidationResult => {
	const errors: Record<string, string> = {};
	
	const emailValidation = validateEmail(email);
	if (!emailValidation.isValid) {
		errors.email = emailValidation.error!;
	}
	
	const passwordValidation = validatePassword(password);
	if (!passwordValidation.isValid) {
		errors.password = passwordValidation.error!;
	}
	
	return {
		isValid: Object.keys(errors).length === 0,
		errors
	};
};

export const validateSignUpForm = (name: string, email: string, password: string): ValidationResult => {
	const errors: Record<string, string> = {};
	
	const nameValidation = validateName(name);
	if (!nameValidation.isValid) {
		errors.name = nameValidation.error!;
	}
	
	const emailValidation = validateEmail(email);
	if (!emailValidation.isValid) {
		errors.email = emailValidation.error!;
	}
	
	const passwordValidation = validatePassword(password);
	if (!passwordValidation.isValid) {
		errors.password = passwordValidation.error!;
	}
	
	return {
		isValid: Object.keys(errors).length === 0,
		errors
	};
};
