export interface ValidationResult {
	isValid: boolean;
	errors: Record<string, string>;
}

export const validators = {
	name: (value: string) => !value.trim() ? 'Name is required' : '',
	email: (value: string) => {
		if (!value.trim()) return 'Email is required';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
		return '';
	},
	password: (value: string) => !value ? 'Password is required' : ''
};

export const validateFields = (fields: Record<string, string>): ValidationResult => {
	const errors: Record<string, string> = {};

	Object.entries(fields).forEach(([field, value]) => {
		const validator = validators[field as keyof typeof validators];
		if (validator) {
			const error = validator(value);
			if (error) errors[field] = error;
		}
	});

	return {
		isValid: Object.keys(errors).length === 0,
		errors,
	};
};