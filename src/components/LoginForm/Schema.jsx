import * as yup from "yup";

export const schema = yup.object({
  identifier: yup.string().required(),
  password: yup.string().required(),
});
