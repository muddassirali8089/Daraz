import * as Yup from "yup";

export const RegistrationSchema = Yup.object({
  fullName: Yup.string().min(2).max(15).required("Please enter your full name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  birthdate: Yup.date().nullable().required("Please enter your birthdate"),
  
});


