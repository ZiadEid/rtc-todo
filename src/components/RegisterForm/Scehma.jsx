import * as yup from "yup";

const passwordRegex =
  /^[A-Z](?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/;

export const schema = yup.object({
  username: yup.string().min(3).required(),
  email: yup.string().email().required(),
//   passord: yup
//     .string()
//     .required()
//     .min(8, "Password must be at least 8 characters")
//     .matches(
//       passwordRegex,
//       "Password must start with a capital letter and contain at least one lowercase letter, one number, and one special character",
//     ),
});
