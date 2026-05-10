import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

export const registerSchema = yup.object({
  email: yup
    .string()
    .trim()
    .lowercase()
    .email("Enter a valid email address (e.g. name@example.com)")
    .required("Email is required"),

  username: yup
    .string()
    .matches(/^[a-zA-Z0-9_@]+$/, "Only letters, numbers, _ and @ are allowed")
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  fullname: yup
    .string()
    .min(3, "Fullname must be at least 3 characters")
    .required("Fullname is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
