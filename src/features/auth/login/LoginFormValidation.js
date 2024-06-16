import * as yup from "yup";

export const LoginValidationSchema = yup.object({
    email: yup.string().email("Invalid email format"),
    password: yup
        .string()
        .required()
        .min(7, "Password must be at least 7 characters")
        .max(50, "Password should be at most 50 characters"),
});
