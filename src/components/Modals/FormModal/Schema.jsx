import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("Title is required"),
});
