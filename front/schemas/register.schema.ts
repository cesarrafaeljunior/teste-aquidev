import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required().min(5),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords do not match")
    .required(),
});
