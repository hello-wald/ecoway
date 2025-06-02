import { useCallback, useState } from "react";
import { validateFields, ValidationResult, validators } from "@/lib/utils";

interface UseAuthFormProps {
	type: "login" | "register";
}

export const useAuthForm = ({ type }: UseAuthFormProps) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [touched, setTouched] = useState<Record<string, boolean>>({});

	const updateField = useCallback((field: string, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }));
		if (errors[field]) {
			setErrors(prev => ({ ...prev, [field]: '' }));
		}
	}, [errors]);

	const validateForm = useCallback((): ValidationResult => {
		const fieldsToValidate = type === "login"
			? { email: formData.email, password: formData.password }
			: formData;

		const validation = validateFields(fieldsToValidate);
		setErrors(validation.errors);
		setTouched(Object.keys(fieldsToValidate).reduce((acc, field) => ({ ...acc, [field]: true }), {}));

		return validation;
	}, [type, formData]);

	const getFieldProps = useCallback((field: string) => ({
		value: formData[field as keyof typeof formData],
		onChangeText: (value: string) => updateField(field, value),
		onBlur: () => {
			setTouched(prev => ({ ...prev, [field]: true }));
			const error = validators[field as keyof typeof validators]?.(formData[field as keyof typeof formData]) || '';
			setErrors(prev => ({ ...prev, [field]: error }));
		},
		error: touched[field] ? errors[field] : undefined,
		hasError: !!(touched[field] && errors[field]),
	}), [formData, touched, errors, updateField]);

	const resetForm = useCallback(() => {
		setFormData({ name: "", email: "", password: "" });
		setErrors({});
		setTouched({});
	}, []);

	return {
		formData,
		validateForm,
		resetForm,
		getFieldProps,
		setErrors,
	};
};