import { useState, useCallback } from "react";
import {
	validateSignInForm,
	validateSignUpForm,
	ValidationResult,
} from "@/lib/utils/validation";

interface UseAuthFormProps {
	type: "signin" | "signup";
}

export const useAuthForm = ({ type }: UseAuthFormProps) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState<Record<string, string>>({});
	const [touched, setTouched] = useState<Record<string, boolean>>({});

	const updateField = useCallback(
		(field: string, value: string) => {
			setFormData((prev) => ({
				...prev,
				[field]: value,
			}));

			// Clear error for this field when user starts typing
			if (errors[field]) {
				setErrors((prev) => ({
					...prev,
					[field]: "",
				}));
			}
		},
		[errors]
	);

	const markFieldTouched = useCallback((field: string) => {
		setTouched((prev) => ({
			...prev,
			[field]: true,
		}));
	}, []);

	const validateForm = useCallback((): ValidationResult => {
		let validation: ValidationResult;

		if (type === "signin") {
			validation = validateSignInForm(formData.email, formData.password);
		} else {
			validation = validateSignUpForm(
				formData.name,
				formData.email,
				formData.password
			);
		}

		setErrors(validation.errors);

		// Mark all fields as touched when validating
		const fieldsToTouch =
			type === "signin"
				? ["email", "password"]
				: ["name", "email", "password"];

		setTouched(
			fieldsToTouch.reduce(
				(acc, field) => ({ ...acc, [field]: true }),
				{}
			)
		);

		return validation;
	}, [type, formData]);

	const resetForm = useCallback(() => {
		setFormData({
			name: "",
			email: "",
			password: "",
		});
		setErrors({});
		setTouched({});
	}, []);

	const getFieldProps = useCallback(
		(field: string) => {
			return {
				value: formData[field as keyof typeof formData],
				onChangeText: (value: string) => updateField(field, value),
				onBlur: () => markFieldTouched(field),
				error: touched[field] ? errors[field] : undefined,
				hasError: !!(touched[field] && errors[field]),
			};
		},
		[formData, errors, touched, updateField, markFieldTouched]
	);

	const isValid = Object.keys(errors).length === 0;
	const hasRequiredFields =
		type === "signin"
			? formData.email && formData.password
			: formData.name && formData.email && formData.password;

	return {
		formData,
		errors,
		touched,
		isValid,
		hasRequiredFields,
		updateField,
		markFieldTouched,
		validateForm,
		resetForm,
		getFieldProps,
	};
};
